import { Modal, Table } from "antd";
import { useEffect, useState } from "react";

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
    },
];

const AdminHomeStatistics = () => {
    const [arrayData, setArrayData] = useState([{ firstName: 'Ian', lastName: 'Smith', gender: false, emailAddress: 'email' }]);
    const [props, setProps] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(isModalOpen);

    const onRow = (e) => {
        console.log(e);
        
        setProps(e);
        setIsModalOpen();
    };

    useEffect(() => {
        setIsModalOpen();
        setProps();
    }, []);

    return (
        <>
            <h1>Admin Home Statistics</h1>
            <Table title={() => 'Active users'} columns={columns} onRow={(record, rowIndex) => {return {onClick: () => setIsModalOpen(true)}}} dataSource={arrayData} bordered />
            <Modal title="Basic Modal" open={isModalOpen} data={props} onCancel={() => setIsModalOpen(!isModalOpen)} onClose={() => setIsModalOpen(!isModalOpen)} footer={null} key="statistics" ></Modal>
        </>
    );
};

export default AdminHomeStatistics;