import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
const { Item } = Form;

const CreatePostForm = ({
  inputPlaceholder,
  buttonText,
  onFinishFunc = () => {},
  handleOnClickCreatePostButton = () => {},
  handleOnClickCreatePostInput = () => {},
}) => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        onFinishFunc(values);
        form.resetFields();
      }}
      layout="inline"
      style={{ display: "flex" }}
    >
      <Item name="postContent" style={{ flex: "auto" }}>
        <Input
          placeholder={inputPlaceholder}
          onClick={handleOnClickCreatePostInput}
        />
      </Item>

      <Item
        style={{
          margin: "0px",
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100px",
          }}
          onClick={handleOnClickCreatePostButton}
        >
          {buttonText}
        </Button>
      </Item>
    </Form>
  );
};

export default CreatePostForm;
