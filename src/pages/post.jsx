import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentCard from "../components/postcomponents/CommentCard";
import CreatePostCard from "../components/postcomponents/CreatePostCard";
import PostCard from "../components/postcomponents/PostCard";
import HomeLayout from "../layouts/HomeLayout";

const FROMUSERINFO = {
  username: "Bobby Lee",
};

const FROMBACKEND = {
  post: {
    postId: 1,
    postTitle: "This is my first forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: 10,
    postContent: `The url param for this post is idk`,
    isLikeSelected: true,
    isDislikeSelected: false,
  },
  comments: [
    {
      username: "Marry Poppins",
      datetime: "12 December 16:40",
      commentContent: "You are wrong",
      isLikeSelected: true,
      isDislikeSelected: false,
    },
    {
      username: "Poppins Harry",
      datetime: "12 December 17:40",
      commentContent: "You are right",
      isLikeSelected: false,
      isDislikeSelected: true,
    },
    {
      username: "Harry Marry",
      datetime: "15 December 17:40",
      commentContent: "You are all stupid",
      isLikeSelected: false,
      isDislikeSelected: false,
    },
  ],
};

const PostPage = () => (
  <HomeLayout content={<PostPageContent />} username={FROMUSERINFO.username} />
);

const PostPageContent = () => {
  const PageWidth = "50%";
  const { post, comments } = FROMBACKEND;
  const [queryParams] = useSearchParams(window.location.search);
  const TEST = queryParams.get("postId");

  return (
    <>
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
      <div
        style={{
          textAlign: "center",
        }}
      >
        This is the value of postId taken from the URL is: {TEST}
      </div>
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="What are your thoughts?"
        buttonText="Comment"
        isPost={false}
      />
      {comments.map((comment) => (
        <CommentCard width={PageWidth} {...comment} />
      ))}
    </>
  );
};

export default PostPage;
