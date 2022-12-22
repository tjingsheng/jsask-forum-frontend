import { Card } from "antd";
import React from "react";
import JsaskLogo from "../assets/JsaskLogo";
import LoginForm from "../components/LoginForm";
import LoginLayout from "../layouts/LoginLayout";

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
  return (
    <Card style={{ width: "50%" }}>
      <LoginForm />
    </Card>
  );
};

export default LoginPage;
