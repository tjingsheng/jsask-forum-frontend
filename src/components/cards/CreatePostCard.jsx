import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Row } from "antd";
import React from "react";

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
      <Row align="middle">
        <Col>
          <AvatarIcon />
        </Col>

        <Col flex="auto">
          <CreatePostInput
            handleOnClick={handleOnClickCreatePostInput}
            text={inputPlaceholder}
          />
        </Col>

        <Col>
          <CreatePostButton
            handleOnClick={handleOnClickCreatePostButton}
            text={buttonText}
          />
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
