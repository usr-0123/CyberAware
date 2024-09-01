import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined, LogoutOutlined, MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';

let defaultItems = [
    { key: '1', label: 'User1', path: '', icon: <UserOutlined /> },
    { key: '2', label: 'Laptop', path: '', icon: <LaptopOutlined /> },
    { key: '3', label: 'Notification', path: '', icon: <NotificationOutlined /> },
];

export let userSidebarItems = [
    { key: '4', label: 'user', path: '', icon: <UserOutlined /> },
    { key: '5', label: 'Laptop3', path: '', icon: <LaptopOutlined /> },
    { key: '6', label: 'Notification4', path: '', icon: <NotificationOutlined /> },
];

export let adminSideBarItems = [...defaultItems,
    { key: '4', label: 'admin', path: '', icon: <UserOutlined /> },
    { key: '5', label: 'Laptop3', path: '', icon: <LaptopOutlined /> },
    { key: '6', label: 'Notification4', path: '', icon: <NotificationOutlined /> },
];