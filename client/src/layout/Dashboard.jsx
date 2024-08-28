import { Button } from "antd";
import { logout } from "../helpers/logout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

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