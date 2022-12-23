import { EditOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const PostCardHeader = ({ postTitle }) => (
  <>
    <Title
      level={3}
      style={{
        margin: "0px",
        marginRight: "auto",
        padding: "10px",
        display: "inline",
      }}
    >
      {postTitle}
    </Title>
    <EditOutlined
      style={{
        margin: "10px",
        fontSize: "16px",
        display: "inline",
        float: "right",
      }}
    />
  </>
);

export default PostCardHeader;
