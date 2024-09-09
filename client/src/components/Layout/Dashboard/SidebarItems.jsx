import React from "react";
import { UserOutlined, HomeOutlined, SolutionOutlined, ReadOutlined, QuestionCircleOutlined } from '@ant-design/icons';

export let userSidebarItems = [
    { key: 'userHome', label: 'Home', path: '/dashboard/user/user-home', icon: <HomeOutlined /> },
    { key: 'quizPage', label: 'Assessments', path: '/dashboard/user/user-quiz', icon: <SolutionOutlined /> },
    { key: 'infoZone', label: 'Educational Content', path: '/dashboard/user/educate', icon: <ReadOutlined /> },
    { key: 'faq', label: 'FAQs', path: '/dashboard/user/user-faqs', icon: <QuestionCircleOutlined /> },
    { key: 'userProfile', label: 'Profile', path: '/dashboard/dashboard/user/', icon: <UserOutlined /> },
];

export let adminSideBarItems = [
    { key: 'adminHome', label: 'Home', path: '/dashboard/admin/admin-home', icon: <HomeOutlined /> },
    { key: 'adminProfile', label: 'Profile', path: '/dashboard/admin', icon: <UserOutlined /> },
];