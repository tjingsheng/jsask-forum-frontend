import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Row } from "antd";
import React from "react";

const AvatarIcon = () => {
  return (
    <Avatar
      size={32}
      icon={<UserOutlined />}
      shape="square"
      style={{
        margin: "10px",
      }}
    />
  );
};

const CreatePostInput = () => {
  return (
    <Input
      placeholder="Create Post"
      style={{
        height: "auto",
      }}
    />
  );
};

const CreatePostButton = () => {
  return (
    <Button
      type="primary"
      style={{
        width: "75px",
        margin: "10px",
      }}
    >
      Post
    </Button>
  );
};

const CreatePostCard = ({ width }) => {
  return (
    <Card
      style={{
        margin: "10px auto",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <Row align="middle">
        <Col>
          <AvatarIcon />
        </Col>
        <Col flex="auto">
          <CreatePostInput />
        </Col>
        <Col>
          <CreatePostButton />
        </Col>
      </Row>
    </Card>
  );
};

export default CreatePostCard;
