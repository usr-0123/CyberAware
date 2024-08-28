import React from 'react';
import './authStyles.scss'
import { Button, Form, Input } from 'antd';
import { validatePasswordPattern } from '../../helpers/validator';
import barner from '../../assets/post1.jpg'
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../services/usersApi';
import { setToken } from '../../helpers/token';
import { alertService } from '../../service/alertService';

const { showAlert } = alertService();

const LoginPage = () => {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginUserMutation();

    const onFinish = async(params) => {
        try {
            if (params) {
                const response = await login(params)
                
                if (!response) {
                    showAlert('error', 'An error occured. Please try again.', 'error', 3)
                    return;
                }

                if (response.data) {
                    showAlert('success', `${response.data.Message}`, 'success', 3);

                    setToken(response.data.data)
                    
                    setTimeout(() => navigate("/dashboard", { replace: true }), 3000);
                } else {
                    showAlert('error', `${response.error.data.Message}`, 'error', 3)
                }
            }
        } catch (error) {
            showAlert('error', 'An error occured. Please try again.', 'error', 3)
        }
    }

    return (
        <div className='mainLayout'>
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