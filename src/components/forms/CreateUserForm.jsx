import { Button, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Messages } from "../../constants";
import { authenticationAction } from "../../redux/actions";

const { Item } = Form;

var CryptoJS = require("crypto-js");
var SHA512 = require("crypto-js/sha512");
var salt = () => CryptoJS.lib.WordArray.random(16).toString();

const CreateUserForm = ({ onFinishForm = () => {} }) => {
  const dispatch = useDispatch();
  const { authentication } = useSelector((state) => state);
  const { isUsernameValid } = authentication;

  const [form] = useForm();

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = () => {
    api["error"]({
      message: Messages.INVALID_USERNAME_TITLE,
      description: Messages.INVALID_USERNAME_DESCRIPTION,
      placement: "top",
    });
  };

  useEffect(() => {
    if (!isUsernameValid) {
      openNotificationWithIcon();
    }
  }, [isUsernameValid]);

  const username = Form.useWatch("username", form);
  useEffect(() => {
    if (username !== undefined) {
      dispatch(authenticationAction.checkUsername(username));
    }
  }, [username]);

  const onFinish = (values) => {
    const newUsername = values.username;
    const newSalt = salt();
    const newPassword = SHA512(newSalt + values.password).toString();
    const newUser = {
      username: newUsername,
      salt: newSalt,
      password: newPassword,
    };
    dispatch(authenticationAction.createUser(newUser));
    onFinishForm();
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <Form form={form} onFinish={onFinish} name="login" autoComplete="off">
        <Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              min: 4,
              message: "Username must be at least 4 characters.",
            },
            {
              max: 32,
              message: "Username must be at most 32 characters.",
            },
          ]}
        >
          <Input allowClear placeholder="Username" />
        </Item>

        <Item
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password allowClear placeholder="Password" />
        </Item>

        <Item
          name="repassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please verify your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Your passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password allowClear placeholder="Re-enter Password" />
        </Item>

        <Item
          wrapperCol={{
            flex: "auto",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={!isUsernameValid}
            style={{
              padding: "auto",
              display: "inline-block",
              float: "right",
              width: "100px",
            }}
          >
            {Messages.CREATE_BUTTON}
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default CreateUserForm;
