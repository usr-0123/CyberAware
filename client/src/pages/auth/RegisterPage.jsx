import React from 'react';
import './authStyles.scss'
import { Button, Form, Input, Select, } from 'antd';
import { validateNameLength, validatePasswordPattern } from '../../helpers/validator';
import { register } from '../../services/userServices';

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'feMale' }
]

const RegisterPage = () => (
    <div className='mainLayout'>
        <Form
            onFinish={(e) => register(e)}
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
                className='formButton'
            >
                <Button type="primary" className='submitButton' htmlType="submit"> Sign Up </Button>
            </Form.Item>
        </Form>
    </div>
)

export default RegisterPage;