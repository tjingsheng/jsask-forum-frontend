import { Tag, Tooltip } from "antd";
import React from "react";
import { Messages } from "../../constants";
import { toggleItemInArray } from "../../utils";

const PostCardTags = ({
  tags,
  filterable = false,
  filterByTagsArray,
  setFilterByTagsArray = () => {},
}) => {
  return (
    <div style={{ padding: "0px 10px" }}>
      {Array.isArray(tags) &&
        tags.map((tag, idx) => (
          <>
            {filterable ? (
              <Tooltip key={idx} title={Messages.TOOLTIP_FILTER_BY_TAG}>
                <Tag
                  onClick={(e) => {
                    setFilterByTagsArray(
                      toggleItemInArray(filterByTagsArray, tag)
                    );
                  }}
                  key={idx}
                >
                  {tag}
                </Tag>
              </Tooltip>
            ) : (
              <Tag key={idx}>{tag}</Tag>
            )}
          </>
        ))}
    </div>
  );
};

export default PostCardTags;
