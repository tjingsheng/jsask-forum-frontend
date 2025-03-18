import { Card, Modal } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import JsaskLogo from "../assets/JsaskLogo";
import JsaskSpin from "../assets/JsaskSpin";
import CreateUserForm from "../components/forms/CreateUserForm";
import LoginForm from "../components/forms/LoginForm";
import ContentComponent from "../layouts/components/Content";
import { footerHeight } from "../layouts/components/Footer";
import LoginLayout from "../layouts/LoginLayout";

const LoginPage = () => {
  return <LoginLayout content={<LoginPageContent />} />;
};

const LoginPageContent = () => {
  const isAuthenticatedSuccess = useSelector(
    (state) => state.authentication.isAuthenticatedSuccess
  );

  return (
    <JsaskSpin spinning={!isAuthenticatedSuccess}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          minHeight: `calc(100vh - ${footerHeight}px)`,
        }}
      >
        <ContentComponent
          style={{ width: "50%" }}
          children={<LoginPageLogo />}
        />
        <ContentComponent
          style={{ width: "50%" }}
          children={<LoginPageForm />}
        />
      </div>
    </JsaskSpin>
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

const LoginPageForm = () => {
  const [isCreateUserModalVisible, setIsCreateUserModalVisible] =
    useState(false);

  return (
    <>
      <Card style={{ width: "50%" }}>
        <LoginForm
          openCreateUserModal={() => setIsCreateUserModalVisible(true)}
        />
      </Card>

      <Modal
        title="Create Account"
        open={isCreateUserModalVisible}
        onOk={() => setIsCreateUserModalVisible(false)}
        onCancel={() => setIsCreateUserModalVisible(false)}
        footer={[]}
      >
        <CreateUserForm
          onFinishForm={() => setIsCreateUserModalVisible(false)}
        />
      </Modal>
    </>
  );
};

export default LoginPage;
