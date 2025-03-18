import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const CommentCardHeader = ({
  userIcon = <UserOutlined />,
  username = "Unknown User",
}) => (
  <>
    <Avatar
      size={32}
      icon={userIcon}
      shape="square"
      style={{
        margin: "10px",
      }}
    />
    <Text>{username}</Text>
  </>
);

export default CommentCardHeader;
