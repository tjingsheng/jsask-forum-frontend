import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import JsaskLogo from "../assets/JsaskLogo";

const NotFoundPage = () => {
  let goto = useNavigate();
  return (
    <Result
      icon={<JsaskLogo size={300} bulb="yellow" />}
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => goto("/home")}>
          Home
        </Button>
      }
    />
  );
};

export default NotFoundPage;
