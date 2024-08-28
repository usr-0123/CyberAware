import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersList from '../pages/admin/UsersList';
import AdminHome from '../pages/admin/AdminHome';

function AdminDashboard() {
    return (
        <Routes>
            <Route index element={<AdminHome />} />
            <Route path="/all-users" element={<UsersList />} />
            <Route path="/admin-home" element={<AdminHome />} />
        </Routes>
    );
}

export default AdminDashboard;