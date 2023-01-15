import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Row } from "antd";
import React from "react";
import CreatePostForm from "../forms/CreatePostForm";

const CreatePostCard = ({
  width,
  inputPlaceholder,
  buttonText,

  handleOnClickCreatePostInput,
  handleOnClickCreatePostButton,
}) => {
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
          <CreatePostForm />
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

const CreatePostInput = ({ handleOnClick, text = "placeholder" }) => (
  <Input
    onClick={() => handleOnClick(true)}
    placeholder={text}
    style={{
      height: "auto",
    }}
  />
);

const CreatePostButton = ({ handleOnClick, text = "button" }) => (
  <Button
    onClick={() => handleOnClick(true)}
    type="primary"
    style={{
      width: "100px",
      marginLeft: "10px",
    }}
  >
    {text}
  </Button>
);

export default CreatePostCard;
