import { Button, Form, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { generateOTP } from "../../service/userServices";

const onFinish = (e) => {
    const otp = generateOTP()
    console.log(otp);
}

const ForgotPassword = () => {
    return (
        <div className='mainLayout'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address',
                        },
                    ]}
                >
                    <Input style={{ display: 'flex', alignItems: 'center' }} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address e.g. user@example.com" />
                </Form.Item>
                <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="primary" htmlType="submit" className="login-form-button"> Log in </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ForgotPassword;