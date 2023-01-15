import { Button, Form, Input } from "antd";
import React from "react";
const { TextArea } = Input;
const { Item } = Form;

const CreatePostForm = () => {
  return (
    <Form onFinish={() => {}} layout="inline">
      <Item name="postTitle" style={{ display: "flex" }}>
        <Input placeholder="Create Post" />
      </Item>

      <Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            float: "right",
            width: "100px",
          }}
        >
          {"Post"}
        </Button>
      </Item>
    </Form>
  );
};

export default CreatePostForm;
