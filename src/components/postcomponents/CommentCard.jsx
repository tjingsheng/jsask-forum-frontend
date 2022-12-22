import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import React from "react";
import PostFooter from "./PostFooter";

const { Paragraph, Text } = Typography;

const CommentCard = ({ width, postContent, ...props }) => (
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
      <AvatarIcon userIcon={<UserOutlined />} {...props} />
      <Paragraph
        style={{
          margin: "0px",
          padding: "10px",
        }}
      >
        {postContent}
      </Paragraph>
      <PostFooter isCommentButtonVisible={false} {...props} />
    </Card>
  </>
);

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

export default CommentCard;
