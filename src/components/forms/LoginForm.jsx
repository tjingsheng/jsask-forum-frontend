import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Messages, Route } from "../../constants";
import { authenticationAction } from "../../redux/actions";

const { Item } = Form;

const LoginForm = () => {
  const goto = useNavigate();
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams(window.location.search);

  const removeQueryParams = () => {
    const param = queryParams.get("q");
    if (param) {
      queryParams.delete("q");
      setQueryParams(queryParams);
    }
  };

  const onFinish = (values) => {
    dispatch(authenticationAction.login(values));
    goto(Route.home);
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
          onClick={removeQueryParams}
          type="primary"
          htmlType="submit"
          style={{
            padding: "auto",
            display: "inline-block",
            float: "right",
            width: "100px",
          }}
        >
          {Messages.LOGIN_BUTTON}
        </Button>
      </Item>
    </Form>
  );
};

export default LoginForm;
