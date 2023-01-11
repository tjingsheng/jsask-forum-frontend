import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostCardContent from "../cardcomponents/PostCardContent";
import PostCardFooter from "../cardcomponents/PostCardFooter";
import PostCardHeader from "../cardcomponents/PostCardHeader";
import PostCardTags from "../cardcomponents/postCardTags";
import ManagePostForm from "../forms/ManagePostForm";

const PostCard = ({
  width,
  isCommentButtonVisible,

  postTitle,
  tags,
  postContent,

  userId,
  ...props
}) => {
  const currId = useSelector((state) => state.authentication.user.id);
  const isEditable = currId === userId;
  const isDeletable = currId === userId;
  const [isEditPostModalVisible, SetIsEditPostModalVisible] = useState(false);
  const [isDeletePostModalVisible, SetIsDeletePostModalVisible] = useState(
    false
  );

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
        {isDeletable && (
          <DeleteOutlined
            onClick={() => SetIsDeletePostModalVisible(true)}
            style={{
              display: "inline-block",
              float: "right",
              fontSize: "20px",
              marginTop: "10px",
              marginRight: "10px",
            }}
          />
        )}
        {isEditable && (
          <EditOutlined
            onClick={() => SetIsEditPostModalVisible(true)}
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
          {...props}
        />
      </Card>

      <Modal
        title="Edit Post"
        open={isEditPostModalVisible}
        onCancel={() => SetIsEditPostModalVisible(false)}
        footer={[]}
      >
        <ManagePostForm
          isEditPost={true}
          currTitle={postTitle}
          currTags={tags}
          currContent={postContent}
        />
      </Modal>

      <Modal
        title="Delete Post Confirmation"
        open={isDeletePostModalVisible}
        onCancel={() => SetIsDeletePostModalVisible(false)}
        footer={[
          <Button key="Yes" onClick={() => SetIsDeletePostModalVisible(false)}>
            Yes
          </Button>,
          <Button key="No" onClick={() => SetIsDeletePostModalVisible(false)}>
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
