import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticationAction, userIdAction } from "../redux/actions";

const { Item } = Form;

const FROMBACKEND = [
  {
    userId: 1,
    username: "Bobby Lee One",
    datetime: "1 November 00:00",
  },
  {
    userId: 2,
    username: "Bobby Lee Two",
    datetime: "2 November 00:00",
  },
  {
    userId: 3,
    username: "Bobby Lee Three",
    datetime: "3 November 00:00",
  },
  {
    userId: 4,
    username: "Harry Potter One",
    datetime: "3 November 00:00",
  },
  {
    userId: 5,
    username: "Bobby Lee Five",
    datetime: "5 November 00:00",
  },
  {
    userId: 6,
    username: "Harry Potter Two",
    datetime: "6 November 00:00",
  },
];

const LoginForm = () => {
  const goto = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(authenticationAction.login());
    dispatch(userIdAction.setId(1));
    goto("/home");
    console.log("Success:", values);
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
        <Button type="primary" htmlType="submit" style={{ padding: "auto" }}>
          Login
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
