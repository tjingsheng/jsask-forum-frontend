import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import PostCardContent from "../cardcomponents/PostCardContent";
import PostCardFooter from "../cardcomponents/PostCardFooter";
import PostCardHeader from "../cardcomponents/PostCardHeader";
import PostCardTags from "../cardcomponents/postCardTags";

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
  return (
    <Card
      style={{
        margin: "10px auto",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <PostCardHeader
        postTitle={postTitle}
        isEditButtonVisible={userId === currId}
      />
      <PostCardTags tags={tags} />
      <PostCardContent postContent={postContent} />
      <PostCardFooter
        isCommentButtonVisible={isCommentButtonVisible}
        {...props}
      />
    </Card>
  );
};

export default PostCard;
