import { Card } from "antd";
import React from "react";
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

  ...props
}) => (
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
    <PostCardTags tags={tags} />
    <PostCardContent postContent={postContent} />
    <PostCardFooter
      isCommentButtonVisible={isCommentButtonVisible}
      {...props}
    />
  </Card>
);

export default PostCard;
