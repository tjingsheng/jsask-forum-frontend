import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticationAction, userIdAction } from "../Redux/actions";

const { Item } = Form;

const LoginForm = () => {
  const goto = useNavigate();
  const dispatch = useDispatch();

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
        <Button
          onClick={() => {
            dispatch(authenticationAction.logIn());
            dispatch(userIdAction.setId(1));
            goto("/home");
          }}
          type="primary"
          htmlType="submit"
          style={{ padding: "auto" }}
        >
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
