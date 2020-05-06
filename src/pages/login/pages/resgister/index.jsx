import React, { useState } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    notification
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import api from '../../api'
import './style';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const { password, nickname, phone, prefix } = values;
        const param = {
            pwd: password,
            username: nickname,
            phone: prefix + phone
        };
        api.registerInfo(param)
        .then(res=> {
            if (res.data.success) {
                window.location.href = '/';
            } else {
                notification.error({
                    message: '注册失败',
                });
            }
        }).catch(err => {
            notification.error({
                message: '注册失败',
                description: err
            });
        })
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return (
        <div className="form-container">
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '86',
                }}
                scrollToFirstError
                className="form-register"
            >
                <Form.Item
                    name="nickname"
                    label={
                        <span>
                            用户名&nbsp;
            <Tooltip title="What do you want others to call you?">
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: '请输入你的用户名!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码："
                    rules={[
                        {
                            required: true,
                            message: '请输入你的密码!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请确认你的密码!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('两次输入的密码不一致!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="电话号码："
                    rules={[
                        {
                            required: true,
                            message: '请输入你的电话号码!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        我已经阅读了相关<a href="">协议</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
        </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegistrationForm;