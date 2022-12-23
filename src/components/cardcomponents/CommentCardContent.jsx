import { Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const { Paragraph } = Typography;

const CommentCardContent = ({ postContent = "", userId }) => {
  const currId = useSelector((state) => state.user.userId);
  const isEditable = currId === userId;
  const [editablePostContent, SetEditablePostContent] = useState(postContent);
  return (
    <Paragraph
      style={{
        margin: "0px",
        padding: "10px",
      }}
      editable={
        isEditable && {
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