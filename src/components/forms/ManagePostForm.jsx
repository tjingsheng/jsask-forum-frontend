import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
const { TextArea } = Input;
const { Item } = Form;

const ManagePostForm = ({
  submitButtonText = "Post",
  onFinishForm = () => {},
  postTitle,
  tags,
  postContent,
}) => {
  const [form] = useForm();
  useEffect(() => {
    form.setFieldsValue({
      postTitle: postTitle,
      tags: tags,
      postContent: postContent,
    });
  }, [postTitle, tags, postContent, form]);

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      onFinish={(values) => {
        onFinishForm(values);
        form.resetFields();
      }}
      autoComplete="off"
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
      >
        <Input allowClear />
      </Item>

      <Item label="Tags" name="tags">
        <Select mode="tags" placeholder="Add Tags (Recommended)" />
      </Item>

      <Item label="Content" name="postContent">
        <TextArea
          allowClear
          placeholder="Text (Optional)"
          showCount
          rows={5}
          maxLength={2500}
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
