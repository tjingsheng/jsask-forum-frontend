import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
const { TextArea } = Input;
const { Item } = Form;

const ManagePostForm = ({
  submitButtonText = "Post",
  currTitle,
  currTags,
  currContent,
  onFinishFunc = (values) => {},
}) => {
  const [form] = useForm();
  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      onFinish={(values) => {
        onFinishFunc(values);
        form.resetFields();
      }}
      autoComplete="off"
      form={form}
    >
      <Item
        label="Title"
        name="postTitle"
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

      <Item label="Tags" name="tags" initialValue={currTags}>
        <Select mode="tags" placeholder="Add Tags (Recommended)" />
      </Item>

      <Item label="Content" name="postContent" initialValue={currContent}>
        <TextArea
          placeholder="Text (Optional)"
          showCount
          rows={5}
          maxLength={500}
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
          {submitButtonText}
        </Button>
      </Item>
    </Form>
  );
};

export default ManagePostForm;
