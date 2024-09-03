import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { useDeleteQuestionMutation, useGetAllQuestionsCategoryQuery } from "../../../services/questionsApi";
import { convertDateToFormat } from "../../../helpers/dateConvertion";
import QuestionModal from "../../../components/Layout/adminDashboard/adminHome/QuestionModal";
import { alertService } from "../../../service/alertService";

const { showAlert } = alertService();

const AdminHomeQuizes = () => {
    const [arrayData, setArrayData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedQId, setSelectedQId] = useState(null);

    const { data, isError, refetch } = useGetAllQuestionsCategoryQuery();
    refetch();
    const [del, { isLoading: isDeleting, error: deleteError }] = useDeleteQuestionMutation();

    const handleSelect = (questionId) => {
        setSelectedQId(questionId);
        setIsModalOpen(true);
    };

    const handleDelete = async () => {
        if (selectedQId) {
            const response = await del(selectedQId);
            if (response.error) {
                showAlert('error', response.error.data.Message, 'error', 3);
                refetch();
            } else {
                showAlert('success', 'Question deleted successfully', 'success', 3);
                setArrayData([]);
                refetch();
                setIsModalOpen(false);
            }
        } else {
            showAlert('error', 'No question selected', 'error', 3);
        }
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
        }
    }, [data, isError]);

    return (
        <>
            <h1>Admin Home Quizzes</h1>
            <Table
                title={() => 'Available Quizzes'}
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
                    <Button key="edit">Edit</Button>
                ]}
            >
                <QuestionModal selectedQId={selectedQId} data={arrayData} />
            </Modal>
            <Button type="primary">Add Quiz</Button>
        </>
    );
};

export default AdminHomeQuizes;