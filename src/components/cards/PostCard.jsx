import { EditOutlined } from "@ant-design/icons";
import { Card, Modal } from "antd";
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
  const currId = useSelector((state) => state.user.userId);
  const [isEditPostModalVisible, SetisEditPostModalVisible] = useState(false);
  const isEditable = currId === userId;

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
        {isEditable && (
          <EditOutlined
            onClick={() => SetisEditPostModalVisible(true)}
            style={{
              display: "inline-block",
              float: "right",
              fontSize: "16px",
              margin: "10px",
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
        onOk={() => SetisEditPostModalVisible(false)}
        onCancel={() => SetisEditPostModalVisible(false)}
        footer={[]}
      >
        <ManagePostForm
          isEditPost={true}
          currTitle={postTitle}
          currTags={tags}
          currContent={postContent}
        />
      </Modal>
    </>
  );
};

export default PostCard;
