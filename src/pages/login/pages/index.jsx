import React from 'react';
import './style';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class NormalLoginForm extends React.Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
        window.location.href = '/app'
    };

    render() {
        return (
            <div className="login-wapper">
                <Form
                    name="normal_login"
                    className="login-form login-inner"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}>
                    <Form.Item
                        name="用户名"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的用户名',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            登陆
                        </Button>
                        或者<a href="">立即注册</a>
                    </Form.Item>
                </Form >
            </div>
        );
    }

}

export default NormalLoginForm;