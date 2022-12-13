import { Button, Form, Input, Select } from "antd";
import React from "react";
const { TextArea } = Input;

const CreatePostForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your post title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Tags" name="tag">
        <Select mode="tags" placeholder="Add Tags (Recommended)" />
      </Form.Item>

      <Form.Item label="Content">
        <TextArea
          placeholder="Text (Optional)"
          showCount
          rows={5}
          maxLength={25}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          flex: "auto",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100px", float: "right" }}
        >
          Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePostForm;
