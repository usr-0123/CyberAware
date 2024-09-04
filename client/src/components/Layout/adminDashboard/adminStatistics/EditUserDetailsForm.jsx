import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { alertService } from "../../../../service/alertService";
import { useUpdateUserMutation } from "../../../../services/usersApi";

const { showAlert } = alertService();

const EditUserDetailsForm = ({ userID, allData, setIsModalOpen, setEdit }) => {
    const [userObject, setUserObject] = useState({});
    const [update] = useUpdateUserMutation();

    const onFinish = async (values) => {

        if (values && !values.firstName && !values.lastName && !values.surName && !values.userName && !values.emailAddress && !values.phoneNumber && !values.street) {
            showAlert('Error', 'Please change atleast one field to make the update', 'error', 3);
            return;
        };

        const editedValues = {
            ...(values.firstName && values.firstName != '' && { firstName: values.firstName }),
            ...(values.lastName && { lastName: values.lastName }),
            ...(values.surName && values.surName != '' && { surName: values.surName }),
            ...(values.userName && { userName: values.userName }),
            ...(values.emailAddress && { emailAddress: values.emailAddress }),
            ...(values.phoneNumber && { phoneNumber: values.phoneNumber }),
            ...(values.street && { street: values.street }),
        };

        try {
            if (userID) {
                const response = await update({ userID, editedValues });
                
                if (response?.data) {
                    showAlert('Success', response.data.Message, 'success', 3);
                    setEdit(false);
                } else {
                    showAlert('Error', response.error.data.Message, 'error', 3);
                };
                
            } else {
                showAlert('Error', 'No user entry was selected to be edited', 'error', 3);
            }
            
        } catch (error) {
            showAlert('Error', 'There was an error while editing details. Please retry.', 'error', 3);
        };
    };

    useEffect(() => {
        if (allData) {
            const filteredUserObject = allData.filter(object => object.userID === userID);
            if (filteredUserObject.length > 0) {
                setUserObject(filteredUserObject[0]);
            } else {
                setUserObject({});
            }
        };
    }, [userID, allData]);

    return (
        <Form
            name="editUserForm"
            onFinish={onFinish}
        >

            <Form.Item
                name="firstName"
                label="First Name"
            >
                <Input placeholder={userObject?.firstName} />
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Last Name"
            >
                <Input placeholder={userObject?.lastName} />
            </Form.Item>

            <Form.Item
                name="surName"
                label="Surname"
            >
                <Input placeholder={userObject?.surName} />
            </Form.Item>

            <Form.Item
                name="userName"
                label="Username"
            >
                <Input placeholder={userObject?.userName} />
            </Form.Item>

            <Form.Item
                name="emailAddress"
                label="Email Address"
                rules={[
                    {
                        type: "email",
                        message: 'Please enter a valid email address.'
                    },
                ]}
            >
                <Input placeholder={userObject?.emailAddress} />
            </Form.Item>

            <Form.Item
                name="phoneNumber"
                label="Phone Number"
            >
                <Input placeholder={userObject?.phoneNumber} />
            </Form.Item>

            <Form.Item
                name="street"
                label="Physical Address"
            >
                <Input placeholder={userObject?.street} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" >Submit</Button>
            </Form.Item>

        </Form>
    );
};

export default EditUserDetailsForm;