import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UsersList from '../pages/admin/UsersList';
import AdminHome from '../pages/admin/AdminHome';
import { decodeToken } from '../helpers/token';

function AdminDashboard() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const route = await logout();
        navigate(route.route, { replace: true });
    };

    useEffect(() => {
        const user = decodeToken();

        if (!user) {
            handleLogout();
        };

        if (user.usrRole === 'User') {
            handleLogout()
        };

    }, [navigate]);

    return (
        <Routes>
            <Route index element={<AdminHome />} />
            <Route path="/admin-home" element={<AdminHome />} />
            <Route path="/all-users" element={<UsersList />} />
        </Routes>
    );
}

export default AdminDashboard;