import { Tag } from "antd";
import React from "react";

const PostCardTags = ({ tags }) => (
  <div style={{ padding: "0px 10px" }}>
    {tags.map((tag, idx) => (
      <Tag key={idx}>{tag}</Tag>
    ))}
  </div>
);

export default PostCardTags;
