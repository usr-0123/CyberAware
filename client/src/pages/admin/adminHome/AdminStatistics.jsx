import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import AdminUserDetailsModal from "../../../components/Layout/adminDashboard/adminStatistics/AdminUserDetailsModal";
import { alertService } from "../../../service/alertService";
import { useDeleteUserMutation, useGetAllUsersQuery } from "../../../features/api/usersApi";

const { showAlert } = alertService();

const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName'
    }, {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName'
    }, {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render: (gender) => (gender ? 'Female' : 'Male'),
    }, {
        title: 'Email Address',
        dataIndex: 'emailAddress',
        key: 'emailAddress'
    }, {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber'
    }, {
        title: 'User Role',
        dataIndex: 'usrRole',
        key: 'usrRole'
    },
];

const AdminHomeStatistics = () => {
    const [arrayData, setArrayData] = useState();
    const [props, setProps] = useState(null);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    const { data, isError, refetch } = useGetAllUsersQuery();

    const [del, { isLoading: isDeleting }] = useDeleteUserMutation();

    const handleSelect = (userID) => {
        setSelectedRowId(userID);
        setIsModalOpen(!isModalOpen);
    };

    const handleDelete = async () => {
        if (selectedRowId) {
            const response = await del(selectedRowId);

            if (response.error) {
                showAlert('Error', response.error.data.Message, 'error', 3);
                refetch();
            } else {
                showAlert('Success', 'User deleted successfully', 'success', 3);
                setArrayData([]);
                refetch();
            }
        } else {
            showAlert('Error', 'No user selected to be deleted', 'error', 3);
        };

        setIsModalOpen(false);
    };

    useEffect(() => {
        if (data?.data) {
            setArrayData(data.data);
        } else if (isError) {
            setArrayData([]);
        }
    }, [data, isError]);

    return (
        <>
            <h3>Users</h3>
            <Table
                columns={columns}
                onRow={(record) => ({
                    onClick: () => handleSelect(record.userID)
                })}
                rowKey="userID"
                dataSource={arrayData}
                bordered
            />

            <Modal
                title="User Information."
                open={isModalOpen}
                data={props}
                centered
                width={500}
                onCancel={() => setIsModalOpen(!isModalOpen)}
                onClose={() => setIsModalOpen(!isModalOpen)}
                footer={[
                    <Button key="delete" onClick={handleDelete} loading={isDeleting}>Delete</Button>,
                    !edit && <Button key="edit" onClick={() => setEdit(!edit)} >Edit</Button>,
                    edit && <Button key="cancelEdit" onClick={() => setEdit(!edit)} >Cancel Edit</Button>
                ]}
                key="statistics" >
                <AdminUserDetailsModal selectedUserId={selectedRowId} setIsModalOpen={setIsModalOpen} data={arrayData} edit={edit} setEdit={setEdit} />
            </Modal>
        </>
    );
};

export default AdminHomeStatistics;