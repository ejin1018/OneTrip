import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Login.scss";

const Login = () => {
    return (
        <Form className="login-form">
            <h2 className="bold">로그인</h2>
            <Form.Item name="name" className="name" rules={[{ required: true, message: "아이디를 입력하세요" }]}>
                <Input className="upload-name" size="large" placeholder="아이디를 입력하세요" />
            </Form.Item>
            <Form.Item name="password" className="password" rules={[{ required: true, message: "비밀번호를 입력하세요" }]}  >
                <Input.Password className="upload-password" size="large" placeholder="비밀번호를 입력하세요" />
            </Form.Item>
            <Form.Item
                name="rememberid"
                valuePropName="checked"
                className="checkbox"
            >
                <Checkbox>아이디저장</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="loginbt">
                    로그인
                </Button>
            </Form.Item>
            <div className="login-data">            
                <span>아이디 찾기</span>
                <span>비밀번호 찾기</span>
                <span className="bold">회원가입</span>
            </div>
        </Form>
    )
}
export default Login;