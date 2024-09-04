import React from "react";
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

export let userSidebarItems = [
    { key: 'userHome', label: 'Home', path: '', icon: <HomeOutlined /> },
    { key: 'userProfile', label: 'Profile', path: '', icon: <UserOutlined /> },
];

export let adminSideBarItems = [
    { key: 'adminHome', label: 'Home', path: '/dashboard/admin', icon: <HomeOutlined /> },
    { key: 'adminProfile', label: 'Profile', path: '', icon: <UserOutlined /> },
];