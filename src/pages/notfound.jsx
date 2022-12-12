import Icon from "@ant-design/icons";
import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoBlueSvg } from "../assets/LogoBlue.svg";

const NotFoundPage = () => {
  let goto = useNavigate();
  return (
    <Result
      icon={
        <Icon
          component={LogoBlueSvg}
          style={{
            fontSize: "300px",
          }}
        />
      }
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => goto("home")}>
          Home
        </Button>
      }
    />
  );
};

export default NotFoundPage;
