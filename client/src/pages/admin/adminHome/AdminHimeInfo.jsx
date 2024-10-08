import { Table } from "antd";
import React from "react";

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

    return (
        <>
            <h3>Educational Information Content</h3>
            <Table
                columns={columns}
                dataSource={data?.body}
                bordered rowKey="title"
                pagination={{ pageSize: 5 }} />
        </>
    );
};

export default AdminHomeInfo;