import { useEffect, useState } from "react";
import { useGetUsersQuizesQuery } from "../../../features/api/quizApi";
import { Table } from "antd";
import { convertDateToFormat } from "../../../helpers/dateConvertion";

const columns = [
    {
        title: 'Email Address',
        dataIndex: 'emailAddress',
        key: 'emailAddress'
    }, {
        title: 'Question',
        dataIndex: 'questionText',
        key: 'questionText'
    }, {
        title: 'Response',
        dataIndex: 'response',
        key: 'response'
    }, {
        title: 'Submitted On',
        dataIndex: 'quizDate',
        key: 'quizDate',
        render: (date) => convertDateToFormat(date),
    }
];

const AdminUserQuizes = () => {
    const [arrayData, setArrayData] = useState();
    const { data, refetch } = useGetUsersQuizesQuery();

    useEffect(() => {
        if (data?.data) {
            setArrayData(data.data);
        };

        refetch();

    }, [data, refetch]);

    return (
        <>
            <Table
                title={() => 'Available Questions'}
                columns={columns}
                rowKey="questionId"
                dataSource={arrayData}
                bordered
            />
        </>
    );
};

export default AdminUserQuizes;