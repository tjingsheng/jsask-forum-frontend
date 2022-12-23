import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const CommentCardHeader = ({
  userIcon = <UserOutlined />,
  username = "Unknown User",
}) => (
  <div style={{ padding: "10px" }}>
    <Avatar
      size={32}
      icon={userIcon}
      shape="square"
      style={{
        marginRight: "10px",
      }}
    />
    <Text>{username}</Text>
  </div>
);

export default CommentCardHeader;
