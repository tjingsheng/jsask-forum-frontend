import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import JsaskLogo from "../assets/JsaskLogo";
import { Route } from "../constants";

const NotFoundPage = () => {
  const goto = useNavigate();
  return (
    <Result
      icon={<JsaskLogo height={300} bulb="yellow" />}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => goto(Route.home)}>
          Home
        </Button>
      }
    />
  );
};

export default NotFoundPage;
