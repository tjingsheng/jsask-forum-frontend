import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Messages } from "../../constants";
import { authenticationAction } from "../../redux/actions";

const { Item } = Form;

const LoginForm = ({ openCreateUserModal }) => {
  const [form] = useForm();
  const username = Form.useWatch("username", form);
  const password = Form.useWatch("password", form);

  const dispatch = useDispatch();
  const { authentication } = useSelector((state) => state);
  const { isAuthenticated, isAuthenticatedSuccess, isInvalidCredentials } = authentication;

  const onFinish = (values) => {
    dispatch(authenticationAction.login(values));
    form.resetFields();
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = () => {
    api["error"]({
      message: Messages.INVALID_CREDENTIALS_TITLE,
      description: Messages.INVALID_CREDENTIALS_DESCRIPTION,
      placement: "top",
    });
  };
  useEffect(() => {
    if (isInvalidCredentials && !username && !password) {
      openNotificationWithIcon();
    }
  }, [isAuthenticated, isAuthenticatedSuccess, isInvalidCredentials]);

  return (
    <>
      {contextHolder}
      <Form form={form} name="login" onFinish={onFinish} autoComplete="off">
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
          <Input allowClear placeholder="Username" />
        </Item>

        <Item name="password">
          <Input.Password allowClear placeholder="Password" />
        </Item>

        <Item
          wrapperCol={{
            flex: "auto",
          }}
        >
          <Link onClick={openCreateUserModal}>{Messages.SIGNUP_BUTTON}</Link>
          <Button
            disabled={!isAuthenticatedSuccess}
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
    </>
  );
};

export default LoginForm;
