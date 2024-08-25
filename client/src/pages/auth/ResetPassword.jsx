import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from 'antd';
import { useResetPasswordMutation } from "../../services/usersApi";
import { validatePasswordPattern } from "../../helpers/validator";
import { useState } from "react";

const ResetPassword = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [reset, { isLoading }] = useResetPasswordMutation();
    const navigate = useNavigate();

    const onFinish = async (params) => {
        console.log('params:', params);
        // params: {
        //     "emailAddress": "kemboilewis6@gmail.com",
        //     "confirmPassword": "@Usr0123",
        //     "otpCode": "440fi",
        //     "newPassword": "@Usr0123"
        // }
        
        try {
            if (params) {
                // const response = await reset(params)

                if (!response) {
                    messageApi.error('An error occured. Please try again.');
                    return;
                }

                if (response.data) {
                    messageApi.success(`${response.data.Message}`);

                    setTimeout(() => navigate("/login", { replace: true }), 3000);
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
            <Form
                onFinish={(e) => onFinish(e)}
                className="authForm"
                style={{ borderRadius: "10px" }}
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
                    name="otpCode"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter otp code',
                        },
                    ]}
                >
                    <Input placeholder='Enter otp code' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validatePasswordPattern,
                        },
                    ]}
                >
                    <Input.Password placeholder='Enter new password' className='formInput' />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validatePasswordPattern,
                        },
                    ]}
                >
                    <Input.Password placeholder='Confirm new password' className='formInput' />
                </Form.Item>

                <Form.Item className='formButton' >
                    <Button type="primary" className='submitButton' htmlType={"submit"} > Reset Password </Button>
                </Form.Item>

                <Form.Item className='formItem' >
                    Or <a href="" onClick={() => navigate("/login", { replace: true })}> Back to login </a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ResetPassword;