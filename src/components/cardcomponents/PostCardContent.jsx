import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const PostCardContent = ({ postContent = "Unknown Content" }) => (
  <Paragraph
    style={{
      margin: "0px",
      padding: "10px",
    }}
  >
    {postContent}
  </Paragraph>
);

export default PostCardContent;
