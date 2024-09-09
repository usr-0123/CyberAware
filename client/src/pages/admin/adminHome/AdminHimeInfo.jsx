import { Table } from "antd";
import { useEffect, useState } from "react";

import data from '../../../.json'

const columns = [
    {
        title: 'Info Title',
        dataIndex: 'title',
        key: 'title'
    }, {
        title: 'Description',
        dataIndex: 'Heading',
        key: 'Heading'
    }, {
        title: 'Subtopics',
        dataIndex: 'Content',
        key: 'Content',
        render: (content) => content ? content.length : 0
    }
];

const AdminHomeInfo = () => {
    const [arrayData, setArrayData] = useState([]);

    useEffect(() => {
        if (data && data.body) {
            setArrayData(data.body);
        }
    }, []);

    return (
        <>
            <h1>Admin Home Info</h1>
            <Table title={() => 'Educational Information Content'} columns={columns} dataSource={arrayData} bordered rowKey="title" />
        </>
    );
};

export default AdminHomeInfo;