import React from "react";
import CommentCard from "../components/postcomponents/CommentCard";
import CreatePostCard from "../components/postcomponents/CreatePostCard";
import PostCard from "../components/postcomponents/PostCard";
import HomeLayout from "../layouts/HomeLayout";

const FROMBACKEND = {
  post: {
    postTitle: "This is my first forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: "10",
    postContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.`,
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

const PageWidth = "50%";
const PostPageContent = () => {
  const { post, comments } = FROMBACKEND;

  return (
    <>
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
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

const PostPage = () => <HomeLayout content={<PostPageContent />} />;

export default PostPage;
