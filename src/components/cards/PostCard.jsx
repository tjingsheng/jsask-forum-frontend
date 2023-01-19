import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAction } from "../../redux/actions";
import PostCardContent from "../cardcomponents/PostCardContent";
import PostCardFooter from "../cardcomponents/PostCardFooter";
import PostCardHeader from "../cardcomponents/PostCardHeader";
import PostCardTags from "../cardcomponents/PostCardTags";
import ManagePostForm from "../forms/ManagePostForm";

const PostCard = ({
  width,
  isCommentButtonVisible,

  postTitle,
  tags,
  postContent,

  isCreator,
  currUserId,

  postId,
  ...props
}) => {
  const [isEditPostModalVisible, setIsEditPostModalVisible] = useState(false);
  const [isDeletePostModalVisible, setIsDeletePostModalVisible] = useState(
    false
  );
  const goto = useNavigate();
  const dispatch = useDispatch();

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
        <PostCardHeader postTitle={postTitle} />
        {isCreator && (
          <DeleteOutlined
            onClick={() => setIsDeletePostModalVisible(true)}
            style={{
              display: "inline-block",
              float: "right",
              fontSize: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          />
        )}
        {isCreator && (
          <EditOutlined
            onClick={() => setIsEditPostModalVisible(true)}
            style={{
              display: "inline-block",
              float: "right",
              fontSize: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          />
        )}
        <PostCardTags tags={tags} />
        <PostCardContent postContent={postContent} />
        <PostCardFooter
          isCommentButtonVisible={isCommentButtonVisible}
          postId={postId}
          currUserId={currUserId}
          {...props}
        />
      </Card>

      <Modal
        title="Edit Post"
        open={isEditPostModalVisible}
        onCancel={() => setIsEditPostModalVisible(false)}
        footer={[]}
      >
        <ManagePostForm
          submitButtonText="Edit"
          onFinishFunc={(values) => {
            setIsEditPostModalVisible(false);
            dispatch(
              postAction.updatePost({
                postId: postId,
                postTitle: values.postTitle,
                postContent: values.postContent,
                tags: values.tags,
              })
            );
          }}
          postTitle={postTitle}
          tags={tags}
          postContent={postContent}
        />
      </Modal>

      <Modal
        title="Delete Post Confirmation"
        open={isDeletePostModalVisible}
        onCancel={() => setIsDeletePostModalVisible(false)}
        footer={[
          <Button
            key="Yes"
            onClick={() => {
              setIsDeletePostModalVisible(false);
              dispatch(postAction.deletePost(postId));
              goto("/");
            }}
          >
            Yes
          </Button>,
          <Button key="No" onClick={() => setIsDeletePostModalVisible(false)}>
            No
          </Button>,
        ]}
      >
        <div>
          Are you sure you want to delete your post? This action is
          irreversible.
        </div>
      </Modal>
    </>
  );
};

export default PostCard;
