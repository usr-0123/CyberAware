import React from 'react';
import { Tabs } from 'antd';
import AdminHomeGeneral from './adminHome/AdminHomeGeneral';
import AdminHomeStatistics from './adminHome/AdminStatistics';
import AdminHomeQuizes from './adminHome/AdminQuizes';
import AdminHomeInfo from './adminHome/AdminHimeInfo';
import AdminHomeFAQs from './adminHome/AdminHomeFAQs';

const onChange = (key) => {
};

const tabItems = [
    {
        key: '1',
        label: 'General',
        children: <AdminHomeGeneral />
    },
    {
        key: '2',
        label: 'Statistics',
        children: <AdminHomeStatistics />
    },
    {
        key: '3',
        label: 'Quizes',
        children: <AdminHomeQuizes />
    },
    {
        key: '4',
        label: 'Informational Content',
        children: <AdminHomeInfo />
    },
    {
        key: '5',
        label: 'FAQs',
        children: <AdminHomeFAQs />
    },
];

const AdminHome = () => {
    return (
        <>
            <h1>Admin Home</h1>
            <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
        </>
    )
}

export default AdminHome;