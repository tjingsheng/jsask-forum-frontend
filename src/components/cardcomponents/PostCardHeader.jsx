import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const PostCardHeader = ({ postTitle }) => (
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
);

export default PostCardHeader;
