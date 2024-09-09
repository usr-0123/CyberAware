import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import { validatePasswordPattern } from "../../helpers/validator";
import { useState } from "react";
import { alertService } from "../../service/alertService";
import { useGetOTPMutation, useResetPasswordMutation } from "../../features/api/usersApi";

const { showAlert } = alertService();

const ResetPassword = () => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [valid, setValid] = useState(false);
    const [reset, { isLoading }] = useResetPasswordMutation();
    const [fetchOtp, { isOTPLoading }] = useGetOTPMutation();
    const navigate = useNavigate();

    const validateOtp = async (params) => {
        
        const isValid = await fetchOtp({ emailAddress: email, otp: params.target.value })

        if (isValid.data) {
            setValid(isValid.data.Message)
            return isValid.data.Message
        } else {
            return message('Please enter otp');
        }
    }

    const onFinish = async (params) => {
        
        try {
            const { emailAddress, confirmPassword } = params;
            if (params) {
                const response = await reset({ emailAddress, password:confirmPassword });

                if (!response) {
                    showAlert('error', 'An error occured. Please try again.', 'error', 3);
                    return;
                }

                if (response.data) {
                    showAlert('success', `${response.data.Message}`, 'success', 3);

                    setTimeout(() => navigate("/login", { replace: true }), 3000);
                } else {
                    showAlert('error', `${response.error.data.Message}`, 'error', 3);
                }
            }
        } catch (error) {
            showAlert('error', 'An error occured. Please try again.', 'error', 3)
        }
    }

    return (
        <div className='mainLayout'>
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
                    <Input placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} className='formInput' />
                </Form.Item>

                {email && <Form.Item
                    name="otpCode"
                    className='formItem'
                    rules={[
                            () => ({
                                validator(_, value) {
                                    
                                    if (value) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(new Error('Please enter otp'));
                                    }
                                }
                            })
                    ]}
                >
                    <Input placeholder='Enter otp code' disabled={!email} onChange={(e) => validateOtp(e)} className='formInput' />
                </Form.Item>}

                {valid && <Form.Item
                    name="newPassword"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validatePasswordPattern,
                        },
                    ]}
                >
                    <Input.Password placeholder='Enter new password' disabled={!email || !valid} className='formInput' />
                </Form.Item>}

                {valid && <Form.Item
                    name="confirmPassword"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            validator: validatePasswordPattern,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {

                                if (!value || getFieldValue('newPassword') === value) {
                                    setPassword(true);
                                    return Promise.resolve();
                                } else {
                                    setPassword(false)
                                    return Promise.reject(new Error('Passwords do not match!'));
                                }
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm new password' disabled={!email || !valid} className='formInput' />
                </Form.Item>}

                {valid && <Form.Item className='formButton' >
                    <Button disabled={!email || !password} type="primary" className='submitButton' htmlType={"submit"} > Reset Password </Button>
                </Form.Item>}

                <Form.Item className='formItem' >
                    Or <a href="" onClick={() => navigate("/login", { replace: true })}> Back to login </a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ResetPassword;