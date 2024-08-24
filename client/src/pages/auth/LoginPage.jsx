import React from 'react';
import './authStyles.scss'
import { Button, Form, Input, message } from 'antd';
import { validatePasswordPattern } from '../../helpers/validator';
import { authenticate } from '../../services/userServices';
import barner from '../../assets/post1.jpg'
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../services/usersApi';

const LoginPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginUserMutation();

    const onFinish = async(params) => {
        try {
            if (params) {
                const response = await login(params)
                
                if (!response) {
                    messageApi.error('An error occured. Please try again.');
                    return;
                }

                if (response.data) {
                    messageApi.success(`${response.data.Message}`);

                    setTimeout(() => navigate("/dashboard", { replace: true }), 3000);
                } else {
                    messageApi.error(`${response.error.data.Message}`);
                }
            }
        } catch (error) {
            messageApi.error('An error occured. Please try again.');
        }
    }

    return (
        <div className='mainLayout'>
            {contextHolder}
            <div className='image' style={{ borderRadius: "10px 0 0 10px" }}>
                <img src={barner} alt="barner" style={{ borderRadius: "10px 0 0 10px" }} />
            </div>
            <Form
                onFinish={(e) => onFinish(e)}
                className="authForm"
                style={{ borderRadius: "0 10px 10px 0" }}
                initialValues={{
                    remember: true,
                }}
            >
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
                    className='formItem'
                >
                    <a href="" onClick={() => navigate("/forgot-password", { replace: true })}> Forgot password </a>
                </Form.Item>

                <Form.Item className='formButton' >
                    <Button type="primary" className='submitButton' htmlType="submit" >
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item
                    className='formItem'
                >
                    Or <a href="" onClick={() => navigate("/register", { replace: true })}> register an account </a>
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginPage;