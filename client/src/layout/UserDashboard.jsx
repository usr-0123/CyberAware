import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UsersList from '../pages/admin/UsersList';

function UserDashboard() {
    return (
        <>
            <Routes>
                {/* <Route path="all-users" element={<UsersList />} /> */}
                {/* <Route path="settings" element={<UserSettings />} /> */}
            </Routes>
        </>
    );
}

export default UserDashboard;