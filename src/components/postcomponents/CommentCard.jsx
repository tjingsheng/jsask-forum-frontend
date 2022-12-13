import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import React from "react";
import PostFooter from "./PostFooter";

const { Paragraph, Text } = Typography;

const AvatarIcon = ({
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

const CommentCard = ({ width, datetime, username, commentContent }) => (
  <>
    <Card
      style={{
        margin: "10px auto",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <AvatarIcon userIcon={<UserOutlined />} username={username} />
      <Paragraph
        style={{
          margin: "0px",
          padding: "10px",
        }}
      >
        {commentContent}
      </Paragraph>
      <PostFooter
        isCommentButtonVisible={false}
        username={username}
        datetime={datetime}
      />
    </Card>
  </>
);

export default CommentCard;