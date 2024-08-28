import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { clearStorageOnTokenExpiry, decodeToken } from "../helpers/token";

import UserRoutes from "./UserDashboard";
import AdminRoutes from "./AdminDashboard";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const response = clearStorageOnTokenExpiry();

        if (response && response.route) {
            navigate(response.route, { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        const user = decodeToken();

        if (!user) {
            navigate("/", { replace: true });
        } else if (user.usrRole === 'User') {
            navigate("/dashboard/user/*", { replace: true });
        } else if (user.usrRole === 'Admin') {
            navigate("/dashboard/admin", { replace: true });
        }
    }, [navigate]);

    return (
        <div>
            <Routes>
                <Route path="user/*" element={<UserRoutes />} />
                <Route path="admin/*" element={<AdminRoutes />} />
            </Routes>
        </div>
    );
}

export default Dashboard;