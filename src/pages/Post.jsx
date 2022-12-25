import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentCard from "../components/cards/CommentCard";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import HomeLayout from "../layouts/HomeLayout";

const FROMBACKEND = {
  post: {
    postID: 5,
    userID: 1,
    postDatetime: "12 December 16:40",
    postTitle: "This is my fifth forum post",
    postContent: "This is life 5 by one",
    parentPost: -1,

    tags: ["tag 1", "tag 3"],

    username: "Bobby Lee One",

    commentCount: 23,

    likes: 20,
    isLikeSelected: true,
    isDislikeSelected: false,
  },
  comments: [
    {
      postID: 6,
      userID: 4,
      postDatetime: "12 December 17:40",
      postTitle: "NONE",
      postContent: "1 Comment on this 5 by one",
      parentPost: 5,

      tags: "NONE",

      username: "Harry Potter One",

      commentCount: 5,

      likes: 10,
      isLikeSelected: false,
      isDislikeSelected: true,
    },
    {
      postID: 7,
      userID: 6,
      postDatetime: "12 December 18:40",
      postTitle: "NONE",
      postContent: "2 Comment on this 5 by one",
      parentPost: 5,

      tags: "NONE",

      username: "Harry Potter Two",

      commentCount: 5,

      likes: 999,
      isLikeSelected: false,
      isDislikeSelected: false,
    },
    {
      postID: 8,
      userID: 4,
      postDatetime: "12 December 19:40",
      postTitle: "NONE",
      postContent: "3 Comment on this 5 by one",
      parentPost: 5,

      tags: "NONE",

      username: "Harry Potter One",

      commentCount: 5,

      likes: 8,
      isLikeSelected: true,
      isDislikeSelected: false,
    },
    {
      postID: 9,
      userID: 6,
      postDatetime: "12 December 20:40",
      postTitle: "NONE",
      postContent: "4 Comment on this 5 by Two",
      parentPost: 5,

      tags: "NONE",

      username: "Harry Potter Two",

      commentCount: 5,

      likes: 6,
      isLikeSelected: false,
      isDislikeSelected: false,
    },
  ],
};

const PostPage = () => <HomeLayout content={<PostPageContent />} />;

function extractAllComments(allComments) {
  if (
    allComments === undefined ||
    allComments.post === undefined ||
    allComments.comments === undefined
  ) {
    return {
      posts: {
        postID: 5,
        userID: 1,
        postDatetime: "12 December 16:40",
        postTitle: "This is my fifth forum post",
        postContent: "This is life 5 by one",
        parentPost: -1,

        tags: ["tag 1", "tag 3"],

        username: "Bobby Lee One",

        commentCount: 23,

        likes: 20,
        isLikeSelected: true,
        isDislikeSelected: false,
      },
      comments: [],
    };
  } else {
    console.log(1, allComments);
    console.log(2, allComments.post);
    console.log(3, allComments.comments);
    console.log(4, "reached");
    return allComments;
  }
}

const PostPageContent = () => {
  const PageWidth = "50%";
  const allComments = useSelector((state) => state.post.allComment);
  const isLoading = useSelector((state) => state.app.isLoading);
  // const { post, comments } = extractAllComments(allComments);
  const { post, comments } = FROMBACKEND;
  const [queryParams] = useSearchParams(window.location.search); //FOR TESTING
  const TEST = queryParams.get("postID"); //FOR TESTING

  return (
    <>
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
      {/* FOR TESTING ---> */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        This is the value of postID taken from the URL is: {TEST}
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
