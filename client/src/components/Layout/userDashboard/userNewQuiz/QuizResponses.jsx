import React, { useEffect, useState } from 'react'
import { Button, Collapse, Modal } from 'antd';
import { decodeToken } from '../../../../helpers/token';
import { alertService } from '../../../../service/alertService';
import { useGetAllCategoriesQuery } from '../../../../features/api/categoriesApi';
import { useDeleteQuizMutation, useGetQuizQuestionQuizidQuery } from '../../../../features/api/quizApi';

const { Panel } = Collapse;

const { showAlert } = alertService();

const QuizResponses = () => {
    const [arrayData, setArrayData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [confirmDeleteQuizModal, setConfirmDeleteQuizModal] = useState(false);
    const [quizToDelete, setQuizToDelete] = useState();
    const user = decodeToken();
    const { data, refetch } = useGetQuizQuestionQuizidQuery(user?.userID);
    const { data: categories, refetch: refetchcategories } = useGetAllCategoriesQuery();
    const [deleteQuiz, { isLoading: isDeleteLoading }] = useDeleteQuizMutation();

    useEffect(() => {
        if (categories?.data) {
            setCategoryData(categories.data)
        } else {
            setCategoryData([]);
            refetchcategories();
        };

    }, [categories, refetchcategories]);

    useEffect(() => {

        if (data?.data) {
            setArrayData(data.data);
        } else {
            setArrayData([]);
            refetch();
        };

    }, [data, refetch]);

    const groupedData = categoryData?.map(category => ({
        categoryID: category.categoryID,
        categoryName: category.categoryName,
        questions: arrayData.filter(item => item.questionCategoryId === category.categoryID)
    }))
        .filter(group => group.questions.length > 0);

    const handleDelete = async () => {

        if (quizToDelete?.quizId) {
            const deleteResponse = await deleteQuiz(quizToDelete.quizId);

            if (deleteResponse?.data) {
                showAlert('Delete Success', deleteResponse.data.Message, 'success');
                setConfirmDeleteQuizModal(false);
            } else {
                showAlert('Delete Quiz Error', deleteResponse.error.data.Message, 'error');
            };
            refetch();
        };

        refetch();
    };

    const handleDeleteConfirmation = async (e) => {
        setQuizToDelete(e);
        setConfirmDeleteQuizModal(true);
    };

    return (
        <>
            <h1>Your quiz responses</h1>
            {groupedData.map((group) => (
                <div key={group.categoryID}>
                    <h2>
                        {group.categoryName}
                    </h2>
                    <Collapse>
                        {group.questions.map((item, index) => (
                            <Panel
                                header={
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {item.questionText}
                                        <Button onClick={() => handleDeleteConfirmation(item)}>Delete</Button>
                                    </div>
                                }
                                key={String(item.quizId)}
                            >
                                {item.response}
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            ))}

            <Modal
                title="Confirm Quiz Delete"
                centered
                open={confirmDeleteQuizModal}
                onCancel={() => setConfirmDeleteQuizModal(false)}
                onClose={() => setConfirmDeleteQuizModal(false)}
                footer={[
                    <Button key="deleteQuiz" type='primary' onClick={handleDelete} >Delete</Button>,
                    <Button key="cancelDeleteQuiz" onClick={() => setConfirmDeleteQuizModal(false)} >Cancel Delete</Button>
                ]}
            >

                {quizToDelete && <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px' }}>
                    <h3>Quiz Details</h3>
                    <p><strong>Date:</strong> {new Date(quizToDelete.quizDate).toLocaleDateString()}</p>
                    <p><strong>Question:</strong> {quizToDelete.questionText}</p>
                    <p><strong>Your Response:</strong> {quizToDelete.response}</p>
                </div>}

                <h2>Continue to delete?</h2>
            </Modal>
        </>
    );
}

export default QuizResponses;