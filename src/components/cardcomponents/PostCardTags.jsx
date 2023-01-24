import { Tag } from "antd";
import React from "react";
import { toggleItemInArray } from "../../utils";

const PostCardTags = ({ tags, filterByTagsArray, setFilterByTagsArray }) => (
  <div style={{ padding: "0px 10px" }}>
    {Array.isArray(tags) &&
      tags.map((tag, idx) => (
        <Tag
          onClick={(e) => {
            setFilterByTagsArray(toggleItemInArray(filterByTagsArray, tag));
          }}
          key={idx}
        >
          {tag}
        </Tag>
      ))}
  </div>
);

export default PostCardTags;
