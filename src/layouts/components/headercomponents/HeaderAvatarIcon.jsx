import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

const AvatarIcon = () => (
  <Avatar
    size="large"
    icon={<UserOutlined />}
    shape="square"
    style={{
      float: "right",
      margin: "10px 0px 10px 0px",
    }}
  />
);

export default AvatarIcon;
