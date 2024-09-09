import React, { useEffect, useState } from "react";
import EditUserDetailsForm from "./EditUserDetailsForm";

const AdminUserDetailsModal = ({ selectedUserId, setIsModalOpen, data, edit, setEdit }) => {
    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        if (data) {
            const filteredDataObject = data.filter(object => object.userID === selectedUserId);
            if (filteredDataObject.length > 0) {
                setUserObject(filteredDataObject[0]);
            } else {
                setUserObject({});
            }
        }
    }, [selectedUserId, data]);

    return (
        edit ? < EditUserDetailsForm userID={selectedUserId} allData={data} setIsModalOpen={setIsModalOpen} setEdit={setEdit} /> :
            <>
                <p><strong>First name:</strong> {userObject.firstName || "N/A"}</p>
                <p><strong>Last name:</strong> {userObject.lastName || "N/A"}</p>
                <p><strong>SurName:</strong> {userObject.surName || "N/A"}</p>
                <p><strong>UserName:</strong> {userObject.userName || "N/A"}</p>
                <p><strong>Email Address:</strong> {userObject.emailAddress || "N/A"}</p>
                <p><strong>Phone Number:</strong> {userObject.phoneNumber || "N/A"}</p>
                <p><strong>Date of Birth:</strong> {userObject.dateOfBirth || "N/A"}</p>
                <p><strong>Street Address:</strong> {userObject.street || "N/A"}</p>
                <p><strong>Role:</strong> {userObject.usrRole || "N/A"}</p>
            </>
    );
};

export default AdminUserDetailsModal;