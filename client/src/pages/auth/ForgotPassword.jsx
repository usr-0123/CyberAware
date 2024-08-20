import { Button, Form, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { useSendOTPMutation } from "../../services/usersApi";
import './authStyles.scss'
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [forgetPassword, { isLoading }] = useSendOTPMutation()
    const navigate = useNavigate();
    const onFinish = async (e) => {
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
                className="authForm"
                style={{borderRadius:"10px"}}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="emailAddress"
                    className='formItem'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email address',
                        },
                    ]}
                >
                    <Input style={{ display: 'flex', alignItems: 'center' }} prefix={<MailOutlined />} placeholder="Email address e.g. user@example.com" className='formInput' />
                </Form.Item>
                <Form.Item className='formButton'>
                    <Button type="primary" htmlType="submit" className="submitButton" disabled={isLoading} loading={isLoading} > {isLoading ? 'Please wait...' : 'Submit'} </Button>
                </Form.Item>
                <Form.Item
                    className='formItem'
                >
                    Or <a href="" onClick={()=>navigate("/login",{replace: true})}>login</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ForgotPassword;