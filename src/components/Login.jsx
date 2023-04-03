import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./sass/Login.scss";

const Login = () => {
  return (
    <div className="login-wrap">
      <Form className="login-form">
        <h2 className="login-title">OneTrip</h2>
        <Form.Item name="name" className="name" rules={[{ required: true, message: "아이디를 입력하세요" }]}>
          <Input className="upload-name" size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="아이디를 입력하세요" />
        </Form.Item>
        <Form.Item name="password" className="password" rules={[{ required: true, message: "비밀번호를 입력하세요" }]}>
          <Input.Password className="upload-password" size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="비밀번호를 입력하세요" />
        </Form.Item>
        <Form.Item name="rememberid" valuePropName="checked" className="checkbox">
          <Checkbox>아이디저장</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="loginbt">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
