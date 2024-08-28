import React from 'react';
import { Route, Routes } from 'react-router-dom';

function UserDashboard() {
    return (
        <>User
            <Routes>
                {/* <Route path="dashboard" element={<UserDashboard />} /> */}
                {/* <Route path="settings" element={<UserSettings />} /> */}
            </Routes>
        </>
    );
}

export default UserDashboard;