import { Typography } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAction } from "../../redux/actions";

const { Paragraph } = Typography;

const CommentCardContent = ({ postContent = "", isCreator, postId }) => {
  const dispatch = useDispatch();

  const [editableContent, setEditableContent] = useState(postContent);

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
          onChange: (value) => {
            setEditableContent(value);
            dispatch(
              postAction.updatePost({
                postId: postId,
                postTitle: "NONE",
                postContent: value,
              })
            );
          },
        }
      }
    >
      {editableContent}
    </Paragraph>
  );
};

export default CommentCardContent;
