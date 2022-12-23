import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const CommentCardContent = ({ postContent = "" }) => (
  <Paragraph
    style={{
      margin: "0px",
      padding: "10px",
    }}
  >
    {postContent}
  </Paragraph>
);

export default CommentCardContent;
