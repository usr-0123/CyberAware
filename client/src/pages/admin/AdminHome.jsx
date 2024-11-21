import React from 'react';
import { Tabs } from 'antd';

import AdminHomeGeneral from './adminHome/AdminHomeGeneral';
import AdminHomeStatistics from './adminHome/AdminStatistics';
import AdminHomeQuizes from './adminHome/AdminQuizes';
import AdminHomeInfo from './adminHome/AdminHimeInfo';
import AdminHomeFAQs from './adminHome/AdminHomeFAQs';
import AdminCategory from './adminHome/AdminCategory';
import AdminUserQuizes from './adminHome/AdminUserQuizes';

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
        label: 'Questions',
        children: <AdminHomeQuizes />
    },
    {
        key: '4',
        label: 'Categories',
        children: <AdminCategory />
    },
    {
        key: '5',
        label: 'User Quizes',
        children: <AdminUserQuizes />
    },
    {
        key: '6',
        label: 'Informational Content',
        children: <AdminHomeInfo />
    },
    {
        key: '7',
        label: 'FAQs',
        children: <AdminHomeFAQs />
    },
];

const AdminHome = () => {
    return (
        <>
            <h1>Admin Home</h1>
            <Tabs defaultActiveKey="1" items={tabItems} />
        </>
    )
};

export default AdminHome;