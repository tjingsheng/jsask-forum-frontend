import { Alert, Card, Modal } from "antd";
import React from "react";
import { useState } from "react";
import JsaskLogo from "../assets/JsaskLogo";
import CreateUserForm from "../components/forms/CreateUserForm";
import LoginForm from "../components/forms/LoginForm";
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
      <JsaskLogo width={300} height={450} />
    </div>
  );
};

const LoginPageContent = () => {
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
        <CreateUserForm />
      </Modal>
    </>
  );
};

export default LoginPage;
