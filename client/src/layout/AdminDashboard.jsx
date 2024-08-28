import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersList from '../pages/admin/UsersList';

function AdminDashboard() {
    return (
        <Routes>
            <Route index element={<UsersList />} />
            <Route path="/all-users" element={<UsersList />} />
            {/* <Route path="dashboard" element={<AdminDashboard />} /> */}
            {/* <Route path="settings" element={<AdminSettings />} /> */}
        </Routes>
    );
}

export default AdminDashboard;