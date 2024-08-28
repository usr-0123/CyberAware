import React from 'react';
import './authStyles.scss';
import { Button, Form, Input, Select, } from 'antd';
import { validateNameLength, validatePasswordPattern, validateUserNameLength } from '../../helpers/validator';
import barner from '../../assets/post1.jpg';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/usersApi';
import { alertService } from '../../service/alertService';

const { showAlert } = alertService();

const genderOptions = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 }
];

const RegisterPage = () => {
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterUserMutation();
    const onFinish = async (params) => {

        const response = await register(params);

        if (!response) {
            showAlert('error', 'An error occured. Please try again.', 'error', 3)
            return;
        };

        if (response && response.data) {
            showAlert('success', response.data.Message, 'success', 3)
            setTimeout(() => navigate("/login", { replace: true }), 3000);
        } else {
            showAlert('error', response.error.data.Message, 'error', 3)
        };
    };

    return (
        <div className='mainLayout'>
            <Form
                onFinish={(e) => onFinish(e)}
                className='authForm'
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="firstName"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validateNameLength,
                        },
                    ]}
                >
                    <Input placeholder='Enter your first name' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validateNameLength,
                        },
                    ]}
                >
                    <Input placeholder='Enter your last name' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="surName"
                    className='formItem'
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input placeholder='Enter your surname (Optional)' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="emailAddress"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please enter a valid email address!',
                        },
                    ]}
                >
                    <Input placeholder='Enter your email' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="userName"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validateUserNameLength,
                        },
                    ]}
                >
                    <Input placeholder='Enter your username' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="gender"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            message: 'Please select your gender option!',
                        },
                    ]}
                >
                    <Select placeholder='Select gender' options={genderOptions} className='formInput' />
                </Form.Item>

                <Form.Item
                    name="usrPassword"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validatePasswordPattern,
                        },
                    ]}
                >
                    <Input.Password placeholder='Enter password' className='formInput' />
                </Form.Item>

                <Form.Item
                    className='formButton'
                >
                    <Button type="primary" className='submitButton' htmlType="submit" disabled={isLoading} loading={isLoading} > {isLoading ? 'Please wait...' : 'Sign Up'} </Button>
                </Form.Item>
                <Form.Item
                    className='formItem'
                >
                    Or <a href="" onClick={() => navigate("/login", { replace: true })}> login </a>
                </Form.Item>
            </Form>
            <div className='image' style={{ borderRadius: "0 10px 10px 0" }} >
                <img src={barner} alt="barner" style={{ borderRadius: "0 10px 10px 0" }} />
            </div>
        </div>
    )
}

export default RegisterPage;