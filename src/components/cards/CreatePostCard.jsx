import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import React from "react";
import CreatePostForm from "../forms/CreatePostForm";

const CreatePostCard = ({ width, ...props }) => {
  return (
    <Card
      style={{
        margin: "10px auto",
        padding: "10px",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <Row>
        <Col>
          <AvatarIcon />
        </Col>
        <Col flex={"auto"}>
          <CreatePostForm {...props} />
        </Col>
      </Row>
    </Card>
  );
};

const AvatarIcon = () => (
  <Avatar
    size={32}
    icon={<UserOutlined />}
    shape="square"
    style={{
      marginRight: "10px",
    }}
  />
);

export default CreatePostCard;
