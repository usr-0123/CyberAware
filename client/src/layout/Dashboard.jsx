import { useEffect } from "react";
import { Button } from "antd";
import { logout } from "../helpers/logout";
import { useNavigate } from "react-router-dom";
import { clearStorageOnTokenExpiry } from "../helpers/token";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const response = clearStorageOnTokenExpiry();
    
        if (response && response.route) {
            navigate(response.route, { replace: true });
        }
      }, [logout]);

    const logOut = async() => {
        const response = await logout({logout});
        if (response.route) {
            
            navigate(response.route, {replace: true});
        }
    };

    return (
        <>Dashboard
            <Button onClick={() => logOut()}>Logout</Button>
        </>
    )
}

export default Dashboard;