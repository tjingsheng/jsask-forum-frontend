import { Tag } from "antd";
import React from "react";

const PostCardTags = ({ tags }) => (
  <div style={{ padding: "0px 10px" }}>
    {Array.isArray(tags) &&
      tags.map((tag, idx) => (
        <Tag
          onClick={() => {
            console.log(1, tag);
          }}
          key={idx}
        >
          {tag}
        </Tag>
      ))}
  </div>
);

export default PostCardTags;
