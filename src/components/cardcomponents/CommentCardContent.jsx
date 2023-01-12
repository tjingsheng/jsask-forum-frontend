import { Typography } from "antd";
import React, { useEffect, useState } from "react";

const { Paragraph } = Typography;

const CommentCardContent = ({ postContent = "", isCreator }) => {
  const [editablePostContent, SetEditablePostContent] = useState(postContent);
  useEffect(() => {
    SetEditablePostContent(postContent);
  }, [postContent]);
  return (
    <Paragraph
      style={{
        margin: "0px",
        padding: "10px",
      }}
      editable={
        isCreator && {
          enterIcon: null,
          tooltip: "click to edit comment",
          onChange: SetEditablePostContent,
        }
      }
    >
      {editablePostContent}
    </Paragraph>
  );
};

export default CommentCardContent;
