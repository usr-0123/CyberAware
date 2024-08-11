import { Button, Form, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { useSendOTPMutation } from "../../features/usersApi";

const ForgotPassword = () => {
    const [forgetPassword, { isLoading }] = useSendOTPMutation()
    const onFinish = async(e) => {
        try {
            if (e) {
                const response = await forgetPassword(e)
                if (response && response.data) {
                    console.log(response.data);
                } else {
                    console.log(response);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                    name="emailAddress"
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
                    <Button type="primary" htmlType="submit" className="login-form-button" disabled={isLoading} loading={isLoading} > {isLoading ? 'Please wait...' : 'Log in'} </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ForgotPassword;