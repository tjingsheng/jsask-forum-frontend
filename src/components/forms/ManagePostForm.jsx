import { Button, Form, Input, Select } from "antd";
import React from "react";
const { TextArea } = Input;
const { Item } = Form;

const ManagePostForm = ({
  isEditPost = false,
  currTitle,
  currTags,
  currContent,
}) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Post title cannot be empty!",
          },
        ]}
        initialValue={currTitle}
      >
        <Input />
      </Item>

      <Item label="Tags" name="tag" initialValue={currTags}>
        <Select mode="tags" placeholder="Add Tags (Recommended)" />
      </Item>

      <Item label="Content" name="content" initialValue={currContent}>
        <TextArea
          placeholder="Text (Optional)"
          showCount
          rows={5}
          maxLength={25}
        />
      </Item>

      <Item
        wrapperCol={{
          flex: "auto",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            float: "right",
            width: "100px",
          }}
        >
          {isEditPost ? "Edit" : "Post"}
        </Button>
      </Item>
    </Form>
  );
};

export default ManagePostForm;
