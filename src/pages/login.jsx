import { Card } from "antd";
import React from "react";
import JsaskLogo from "../assets/JsaskLogo";
import LoginForm from "../components/LoginForm";
import LoginLayout from "../layouts/LoginLayout";

const LoginPage = () => {
  return (
    <LoginLayout
      leftColumn={<LoginPageLogo />}
      rightColumn={<LoginPageContent />}
    />
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
      <JsaskLogo size={500} />
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
