import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { decodeToken } from "../../helpers/token";
import { useGetAllUsersQuery } from "../../features/api/usersApi";

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


const UsersList = () => {
    const [arrayData, setArrayData] = useState([]);
    const { data } = useGetAllUsersQuery();
    const { emailAddress } = decodeToken();

    useEffect(() => {
        if (data && data.data) {
            const filteredData = data.data.filter(user => user.emailAddress !== emailAddress);
            setArrayData(filteredData);
        }
    }, [data, emailAddress]);

    return (
        <>
            <h1>Users</h1>
            <Table title={() => 'Active users'} columns={columns} dataSource={arrayData} bordered />
        </>
    );
}

export default UsersList;