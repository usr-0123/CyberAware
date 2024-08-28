import { Button, Table } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import { useState } from "react";

const columns = [
    {
        title: 'Quiz Title',
        dataIndex: 'firstName',
        key: 'firstName'
    }, {
        title: 'Type',
        dataIndex: 'lastName',
        key: 'lastName'
    }, {
        title: 'Created On',
        dataIndex: 'gender',
        key: 'gender',
        render: (gender) => (gender ? 'Female' : 'Male'),
    }, {
        title: 'Score',
        dataIndex: 'emailAddress',
        key: 'emailAddress'
    }
];

const AdminHomeQuizes = () => {
    const [arrayData, setArrayData] = useState();

    return (
        <>
            <h1>Admin Home Quizes</h1>
            <Table title={() => 'Available Quizes'} columns={columns} dataSource={arrayData} bordered />
            <Button type="primary">Add Quiz</Button>
            {/* <Button type="primary" icon={<DownloadOutlined />} > Download </Button> */}
        </>
    );
};

export default AdminHomeQuizes;