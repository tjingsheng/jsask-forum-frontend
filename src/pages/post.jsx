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
    postId: 5,
    userId: 1,
    datetime: "12 December 16:40",
    postTitle: "This is my fifth forum post",
    postContent: "This is life 5 by one",
    parent: -1,

    tags: ["tag 1", "tag 3"],

    username: "Bobby Lee One",

    commentCount: 23,
    isLikeSelected: true,
    isDislikeSelected: false,
  },
  comments: [
    {
      postId: 6,
      userId: 4,
      datetime: "12 December 17:40",
      postTitle: "NONE",
      postContent: "1 Comment on this 5 by one",
      parent: 5,

      tags: "NONE",

      username: "Harry Potter One",

      commentCount: 5,
      isLikeSelected: false,
      isDislikeSelected: true,
    },
    {
      postId: 7,
      userId: 6,
      datetime: "12 December 18:40",
      postTitle: "NONE",
      postContent: "2 Comment on this 5 by one",
      parent: 5,

      tags: "NONE",

      username: "Harry Potter Two",

      commentCount: 5,
      isLikeSelected: false,
      isDislikeSelected: false,
    },
    {
      postId: 8,
      userId: 4,
      datetime: "12 December 19:40",
      postTitle: "NONE",
      postContent: "3 Comment on this 5 by one",
      parent: 5,

      tags: "NONE",

      username: "Harry Potter One",

      commentCount: 5,
      isLikeSelected: true,
      isDislikeSelected: false,
    },
    {
      postId: 9,
      userId: 6,
      datetime: "12 December 20:40",
      postTitle: "NONE",
      postContent: "4 Comment on this 5 by one",
      parent: 5,

      tags: "NONE",

      username: "Harry Potter Two",

      commentCount: 5,
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
  const [queryParams] = useSearchParams(window.location.search); //FOR TESTING
  const TEST = queryParams.get("postId"); //FOR TESTING

  return (
    <>
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
      {/* FOR TESTING ---> */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        This is the value of postId taken from the URL is: {TEST}
      </div>
      {/* <--- FOR TESTING */}
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="What are your thoughts?"
        buttonText="Comment"
        isPost={false}
      />
      {comments.map((comment, idx) => (
        <CommentCard key={idx} width={PageWidth} {...comment} />
      ))}
    </>
  );
};

export default PostPage;
