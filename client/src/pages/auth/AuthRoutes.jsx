import ForgotPassword from "./ForgotPassword";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AuthRoutes = () => {
    return (
        <>
            <RegisterPage />
            <LoginPage />
            <ForgotPassword />
        </>
    )
};

export default AuthRoutes;