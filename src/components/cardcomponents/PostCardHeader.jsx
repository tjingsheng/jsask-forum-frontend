import { EditOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const PostCardHeader = ({ postTitle, isEditButtonVisible = false }) => (
  <>
    <Title
      level={3}
      style={{
        display: "inline-block",
        margin: "0px",
        padding: "10px",
      }}
    >
      {postTitle}
    </Title>
    {isEditButtonVisible && (
      <EditOutlined
        style={{
          display: "inline-block",
          float: "right",
          fontSize: "16px",
          margin: "10px",
        }}
      />
    )}
  </>
);

export default PostCardHeader;
