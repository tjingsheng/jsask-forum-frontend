import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect } from "react";
const { TextArea } = Input;
const { Item } = Form;

const ManagePostForm = ({
  submitButtonText = "Post",
  onFinishFunc = () => {},
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
  }, [postTitle, tags, postContent]);

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
      >
        <Input />
      </Item>

      <Item label="Tags" name="tags">
        <Select mode="tags" placeholder="Add Tags (Recommended)" />
      </Item>

      <Item label="Content" name="postContent">
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
