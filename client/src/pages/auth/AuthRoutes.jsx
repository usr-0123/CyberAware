import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './authStyles.scss'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const AuthRoutes = () => {

    return (
        <div className="master">
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </div>
    )
};

export default AuthRoutes;