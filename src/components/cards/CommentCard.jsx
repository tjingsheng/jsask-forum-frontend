import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Messages } from "../../constants";
import { postAction } from "../../redux/actions";
import CommentCardContent from "../cardcomponents/CommentCardContent";
import CommentCardHeader from "../cardcomponents/CommentCardHeader";
import PostCardFooter from "../cardcomponents/PostCardFooter";

const CommentCard = ({ width, isCreator, postId, ...props }) => {
  const dispatch = useDispatch();
  const [isDeleteCommentModalVisible, SetIsDeleteCommentModalVisible] =
    useState(false);

  return (
    <>
      <Card
        style={{
          margin: "10px auto",
          width: width,
        }}
        bodyStyle={{
          padding: "0",
        }}
      >
        <CommentCardHeader {...props} />
        {isCreator && (
          <DeleteOutlined
            onClick={() => SetIsDeleteCommentModalVisible(true)}
            style={{
              display: "inline-block",
              float: "right",
              fontSize: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          />
        )}
        <CommentCardContent isCreator={isCreator} postId={postId} {...props} />
        <PostCardFooter
          isCommentButtonVisible={false}
          postId={postId}
          {...props}
        />
      </Card>

      <Modal
        title="Delete Comment Confirmation"
        open={isDeleteCommentModalVisible}
        onCancel={() => SetIsDeleteCommentModalVisible(false)}
        footer={[
          <Button
            key="Yes"
            onClick={() => {
              SetIsDeleteCommentModalVisible(false);
              dispatch(postAction.deletePost(postId));
            }}
          >
            {Messages.YES_BUTTON}
          </Button>,
          <Button
            key="No"
            onClick={() => SetIsDeleteCommentModalVisible(false)}
          >
            {Messages.NO_BUTTON}
          </Button>,
        ]}
      >
        {Messages.DELETE_COMMENT_CONFIRMATION}
      </Modal>
    </>
  );
};
export default CommentCard;
