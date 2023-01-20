import { Card, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import JsaskLogo from "../assets/JsaskLogo";
import LoginForm from "../components/forms/LoginForm";
import LoginLayout from "../layouts/LoginLayout";

const LoginPage = () => {
  const isAuthenticatedSuccess = useSelector(
    (state) => state.authentication.isAuthenticatedSuccess
  );
  return (
    <Spin spinning={!isAuthenticatedSuccess}>
      <LoginLayout
        leftColumn={<LoginPageLogo />}
        rightColumn={<LoginPageContent />}
      />
    </Spin>
  );
};

const LoginPageLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <JsaskLogo width={300} height={450} />
    </div>
  );
};

const LoginPageContent = () => {
  return (
    <Card style={{ width: "50%" }}>
      <LoginForm />
    </Card>
  );
};

export default LoginPage;
