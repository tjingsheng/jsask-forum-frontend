import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Messages, Route } from "../../constants";
import { authenticationAction } from "../../redux/actions";

const { Item } = Form;

var CryptoJS = require("crypto-js");
var SHA512 = require("crypto-js/sha512");
var salt = () => CryptoJS.lib.WordArray.random(16).toString();

const CreateUserForm = () => {
  const [form] = useForm();
  const dispatch = useDispatch();

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
    dispatch(authenticationAction.login(values));
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} name="login" autoComplete="off">
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
        <Input.Password placeholder="Password" />
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
              return Promise.reject(new Error("Your passwords do not match!"));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Re-enter Password" />
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
          {Messages.LOGIN_BUTTON}
        </Button>
      </Item>
    </Form>
  );
};

export default CreateUserForm;
