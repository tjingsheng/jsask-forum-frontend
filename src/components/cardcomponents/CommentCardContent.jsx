import { Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { postAction } from "../../redux/actions";

const { Paragraph } = Typography;

const CommentCardContent = ({ postContent = "", isCreator, postId }) => {
  const dispatch = useDispatch();
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
      {postContent}
    </Paragraph>
  );
};

export default CommentCardContent;
