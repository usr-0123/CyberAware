import { Route, Routes } from 'react-router-dom'
import './authStyles.scss'
import React, { lazy } from 'react';
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const LoginPage = lazy(() => import("./LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));

const AuthRoutes = () => {

    return (
        <div className="master">
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </div>
    )
};

export default AuthRoutes;