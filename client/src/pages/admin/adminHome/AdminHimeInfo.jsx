import { Button, Table } from "antd";
import { useState } from "react";

const columns = [
    {
        title: 'Info Title',
        dataIndex: 'firstName',
        key: 'firstName'
    }, {
        title: 'Description',
        dataIndex: 'lastName',
        key: 'lastName'
    }, {
        title: 'Created On',
        dataIndex: 'gender',
        key: 'gender',
        render: (gender) => (gender ? 'Female' : 'Male'),
    }, {
        title: 'Link',
        dataIndex: 'emailAddress',
        key: 'emailAddress'
    }
];

const AdminHomeInfo = () => {
    const [arrayData, setArrayData] = useState();

    return (
        <>
            <h1>Admin Home Info</h1>
            <Table title={() => 'Educational Information Content'} columns={columns} dataSource={arrayData} bordered />
            <Button type="primary">Add Content</Button>
        </>
    );
};

export default AdminHomeInfo;