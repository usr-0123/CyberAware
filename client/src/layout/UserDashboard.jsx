import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHome from '../pages/user/UserHome';
import QuizPage from '../pages/user/QuizPage';
import EduPage from '../pages/user/EduPage';
import UserFAQs from '../pages/user/UserFAQs';
// import UsersList from '../pages/admin/UsersList';

function UserDashboard() {
    return (
        <>
            <Routes>
                <Route index element={<UserHome />} />
                <Route path="/user-home" element={<UserHome />} />
                <Route path="/user-quiz" element={<QuizPage />} />
                <Route path="/educate" element={<EduPage />} />
                <Route path="/user-faqs" element={<UserFAQs />} />
            </Routes>
        </>
    );
}

export default UserDashboard;