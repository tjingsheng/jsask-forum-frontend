import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import CreatePostForm from "./CreatePostForm";

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

const CreatePostInput = ({ handleOnClick }) => (
  <Input
    onClick={() => handleOnClick(true)}
    placeholder="Create Post"
    style={{
      height: "auto",
    }}
  />
);

const CreatePostButton = ({ handleOnClick }) => (
  <Button
    onClick={() => handleOnClick(true)}
    type="primary"
    style={{
      width: "75px",
      marginLeft: "10px",
    }}
  >
    Post
  </Button>
);

const CreatePostCard = ({ width }) => {
  const [isCreatePostModalVisible, setIsCreatePostModalVisible] = useState(
    false
  );

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
          <CreatePostInput handleOnClick={setIsCreatePostModalVisible} />
        </Col>
        <Col>
          <CreatePostButton handleOnClick={setIsCreatePostModalVisible} />
        </Col>
      </Row>
      <Modal
        title="Create Post"
        open={isCreatePostModalVisible}
        onOk={() => setIsCreatePostModalVisible(false)}
        onCancel={() => setIsCreatePostModalVisible(false)}
        footer={[]}
      >
        <CreatePostForm />
      </Modal>
    </Card>
  );
};

export default CreatePostCard;
