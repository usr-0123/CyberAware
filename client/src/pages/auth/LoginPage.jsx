import React from 'react';
import './authStyles.scss'
import { Button, Form, Input } from 'antd';
import { validatePasswordPattern } from '../../helpers/validator';
import { authenticate } from '../../services/userServices';

const LoginPage = () => {

    return (
        <div className='mainLayout'>
            <Form
                onFinish={(e) => authenticate(e)}
                className="authForm"
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
                    name="password"
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
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item className='formButton' >
                    <Button type="primary" className='submitButton' htmlType="submit" >
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item
                    className='formItem'
                >
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginPage;