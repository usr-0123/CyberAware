import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { useDeleteQuestionMutation, useGetAllQuestionsCategoryQuery } from "../../../services/questionsApi";
import { convertDateToFormat } from "../../../helpers/dateConvertion";
import QuestionModal from "../../../components/Layout/adminDashboard/adminHome/QuestionModal";
import { alertService } from "../../../service/alertService";
import NewQuestionForm from "../../../components/Layout/adminDashboard/adminHome/NewQuestionForm";

const { showAlert } = alertService();

const AdminHomeQuizes = () => {
    const [arrayData, setArrayData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useState(false);
    const [selectedQId, setSelectedQId] = useState(null);
    const [edit, setEdit] = useState(false);

    const { data, isError, refetch } = useGetAllQuestionsCategoryQuery();
    const [del, { isLoading: isDeleting }] = useDeleteQuestionMutation();

    const handleSelect = (questionId) => {
        setSelectedQId(questionId);
        setIsModalOpen(true);
    };

    const handleDelete = async () => {
        if (selectedQId) {
            const response = await del(selectedQId);
            if (response.error) {
                showAlert('Error', response.error.data.Message, 'error', 3);
                refetch();
            } else {
                showAlert('Success', 'Question deleted successfully', 'success', 3);
                setArrayData([]);
                refetch();
            }
        } else {
            showAlert('Error', 'No question selected to be deleted', 'error', 3);
        };

        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'Quiz Title',
            dataIndex: 'questionText',
            key: 'questionText'
        }, {
            title: 'Category',
            dataIndex: 'categoryName',
            key: 'categoryName'
        }, {
            title: 'Created On',
            dataIndex: 'createdDate',
            key: 'createdDate',
            render: (date) => convertDateToFormat(date),
        }, {
            title: 'Question Weight',
            dataIndex: 'questionWeight',
            key: 'questionWeight'
        }
    ];

    useEffect(() => {
        if (data?.data) {
            setArrayData(data.data);
        } else if (isError) {
            setArrayData([]);
            refetch();
        }
    }, [data, isError, refetch]);

    return (
        <>
            <Table
                title={() => 'Available Questions'}
                columns={columns}
                onRow={(record) => ({
                    onClick: () => handleSelect(record.questionId)
                })}
                rowKey="questionId"
                dataSource={arrayData}
                bordered
            />
            <Modal
                title="Question Details"
                centered
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={500}
                footer={[
                    <Button key="delete" onClick={handleDelete} loading={isDeleting}>Delete</Button>,
                    !edit && <Button key="edit" onClick={() => setEdit(!edit)} >Edit</Button>,
                    edit && <Button key="cancelEdit" onClick={() => setEdit(!edit)} >Cancel Edit</Button>
                ]}
            >
                <QuestionModal selectedQId={selectedQId} setIsModalOpen={setIsModalOpen} data={arrayData} edit={edit} />
            </Modal>

            <Modal
                title="New Question Input Form"
                centered
                open={isNewQuestionModalOpen}
                onOk={() => setIsNewQuestionModalOpen(false)}
                onCancel={() => setIsNewQuestionModalOpen(false)}
                width={500}
                footer={false}
            >
                <NewQuestionForm setIsNewQuestionModalOpen={setIsNewQuestionModalOpen} />
            </Modal>

            <Button type="primary" key="add" onClick={() => setIsNewQuestionModalOpen(!isNewQuestionModalOpen)} style={{ margin: '10px' }} >Add Quiz</Button>
        </>
    );
};

export default AdminHomeQuizes;