import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticationAction } from "../../redux/actions";

const { Item } = Form;

const LoginForm = () => {
  const goto = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(authenticationAction.login(values));
    goto("/home");
  };

  return (
    <Form name="login" onFinish={onFinish} autoComplete="off">
      <Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          {
            min: 5,
            message: "Username must be at least 5 characters.",
          },
          {
            max: 32,
            message: "Username must be at most 32 characters.",
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
          type="primary"
          htmlType="submit"
          style={{
            padding: "auto",
            display: "inline-block",
            float: "right",
            width: "100px",
          }}
        >
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
