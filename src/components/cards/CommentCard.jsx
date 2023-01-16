import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Modal, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAction } from "../../redux/actions";
import CommentCardContent from "../cardcomponents/CommentCardContent";
import CommentCardHeader from "../cardcomponents/CommentCardHeader";
import PostCardFooter from "../cardcomponents/PostCardFooter";

const { Text } = Typography;

const CommentCard = ({ width, isCreator, postId, ...props }) => {
  const dispatch = useDispatch();
  const [
    isDeleteCommentModalVisible,
    SetIsDeleteCommentModalVisible,
  ] = useState(false);

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
            <Text>Yes</Text>
          </Button>,
          <Button
            key="No"
            onClick={() => SetIsDeleteCommentModalVisible(false)}
          >
            <Text>No</Text>
          </Button>,
        ]}
      >
        <Text>
          Are you sure you want to delete your comment? This action is
          irreversible.
        </Text>
      </Modal>
    </>
  );
};
export default CommentCard;
