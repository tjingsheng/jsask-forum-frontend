import { Typography } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Messages } from "../../constants";
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
      ellipsis={{
        rows: "5",
        expandable: true,
      }}
      editable={
        isCreator && {
          maxLength: 2500,
          enterIcon: null,
          tooltip: Messages.TOOLTIP_EDIT,
          onChange: (value) => {
            setEditableContent(value);
            dispatch(
              postAction.updatePost({
                postId: postId,
                postTitle: "NONE",
                postContent: value,
              }),
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
