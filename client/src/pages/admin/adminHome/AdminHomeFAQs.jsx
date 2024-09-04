import { Button, Table } from "antd";
import { useState } from "react";

const columns = [
    {
        title: 'FAQuestion',
        dataIndex: 'firstName',
        key: 'firstName'
    }, {
        title: 'Description',
        dataIndex: 'lastName',
        key: 'lastName'
    }
];

const AdminHomeFAQs = () => {
    const [arrayData, setArrayData] = useState();

    return (
        <>
            <h1>Admin Home FAQs</h1>
            <Table title={() => 'Frequently Asked Questions'} columns={columns} dataSource={arrayData} bordered />
        </>
    );
};

export default AdminHomeFAQs;