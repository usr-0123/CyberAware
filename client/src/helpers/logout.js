import { alertService } from "../service/alertService";

const { showAlert } = alertService();

export const logout = async (params) => {

    localStorage.removeItem('cyberware-authtoken');

    if (params) {
        const {timeout} = params;
        if (timeout) {
            showAlert('warning', 'Session time out. Please login again', 'warning', 3)
        }
    }

    return {route: "/login"};

}