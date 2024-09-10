import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { Avatar, Typography, Divider, Form, Input, Button, message, DatePicker, Select } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { decodeToken } from "../../helpers/token";
import { useGetUserByIdQuery, useUpdateUserMutation } from "../../features/api/usersApi";
import { convertDateToFormat } from "../../helpers/dateConvertion";
import { alertService } from "../../service/alertService";

const { Title, Text } = Typography;

const dateFormat = 'YYYY-MM-DD';

const { showAlert } = alertService();

const genderOptions = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
];

const Profile = () => {
    const [user, setUser] = useState({});
    const [edit, setEdit] = useState(false);
    const [form] = Form.useForm();

    const disabledDate = (current) => {
        return current && current > dayjs().endOf('day');
    };

    const data = decodeToken();

    const { data: userData, refetch } = useGetUserByIdQuery(data?.userID);
    const [updateUser, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        if (userData?.data) {
            setUser(userData.data[0]);
        };

        refetch();
    }, [userData, refetch, form]);

    const handleSubmit = async (values) => {
        try {
            const response = await updateUser({ userID: user?.userID, editedValues: values }).unwrap();


            if (response?.Message) {
                showAlert('success', response.Message, 'success', 3)
                form.resetFields();
                refetch();
                setEdit(!edit);
            } else {
                showAlert('error', response.error.Message, 'error', 3)
            };

        } catch (error) {
            showAlert('Error occured.', 'Failed to update profile', 'error');
        };
    };

    const getInitials = (firstName, lastName) => {
        const firstInitial = firstName ? firstName.charAt(0) : '';
        const lastInitial = lastName ? lastName.charAt(0) : '';
        return firstInitial + lastInitial;
    };

    const avatarContent = user?.firstName && user?.lastName ? getInitials(user.firstName, user.lastName) : <UserOutlined />;

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <Avatar
                style={{
                    backgroundColor: '#f56a00',
                    verticalAlign: 'middle',
                }}
                size="large"
            >
                {avatarContent}
            </Avatar>
            <Title level={2}>{user.firstName} {user.lastName}</Title>
            <Title level={3}>Assigned Role: {user.usrRole} </Title>
            <Button type="primary" onClick={() => setEdit(!edit)} >{edit ? "Cancel Edit" : "Edit"}</Button>
            <Divider />
            {edit ?
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="firstName"
                        label="First Name"
                    >
                        <Input placeholder={user.firstName} />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Last Name"
                    >
                        <Input placeholder={user.lastName} />
                    </Form.Item>
                    <Form.Item
                        name="userName"
                        label="User Name"
                    >
                        <Input placeholder={user.userName} />
                    </Form.Item>
                    <Form.Item
                        name="emailAddress"
                        label="Email Address"
                    >
                        <Input placeholder={user.emailAddress} />
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                    >
                        <Input placeholder={user.phoneNumber} />
                    </Form.Item>
                    <Form.Item
                        name="dateOfBirth"
                        label="Date of Birth"
                    >
                        <DatePicker
                            placeholder={convertDateToFormat(user?.dateOfBirth) || "Choose date"}
                            disabledDate={disabledDate}
                        />
                    </Form.Item>
                    <Form.Item
                        name="street"
                        label="Street"
                    >
                        <Input placeholder={user.street} />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="Gender"
                    >
                        <Select placeholder={user.gender ? 'Female' : 'Male'} options={genderOptions} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" loading={isLoading} htmlType="submit"> Update Profile </Button>
                    </Form.Item>
                </Form> :
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <Text strong>User Name:</Text> <Text>{user.userName}</Text><br />
                    <Text strong>Email:</Text> <Text>{user.emailAddress}</Text><br />
                    <Text strong>Phone Number:</Text> <Text>{user.phoneNumber}</Text><br />
                    <Text strong>Date of Birth:</Text> <Text>{user.dateOfBirth ? convertDateToFormat(user.dateOfBirth) : 'N/A'}</Text><br />
                    <Text strong>Address:</Text> <Text>{user.street}</Text><br />
                    <Text strong>Role:</Text> <Text>{user.usrRole}</Text><br />
                    <Text strong>Gender:</Text> <Text>{user.gender ? 'Female' : 'Male'}</Text><br />
                </div>
            }
        </div>
    );
};

export default Profile;