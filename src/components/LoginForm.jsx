import { Button, Form, Input } from "antd";
import React from "react";
const { Item } = Form;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Item>

      <Item name="password">
        <Input.Password placeholder="Password [free entry]" />
      </Item>

      <Item
        wrapperCol={{
          flex: "auto",
        }}
      >
        <Button type="primary" htmlType="submit" style={{ padding: "auto" }}>
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
