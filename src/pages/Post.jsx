import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentCard from "../components/cards/CommentCard";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import HomeLayout from "../layouts/HomeLayout";
import { postAction } from "../redux/actions";

const PostPage = () => {
  const currUserId = useSelector((state) => state.authentication.user.id);
  const [queryParams] = useSearchParams(window.location.search);
  const currPostId = queryParams.get("postId");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      postAction.fetchCurrPost({ userId: currUserId, postId: currPostId })
    );
  }, []);
  const allPosts = useSelector((state) => state.post.currPost);
  const [allComments, setAllComments] = useState();
  const [currPost, setCurrPost] = useState();

  useEffect(() => {
    setAllComments(allPosts.comments);
    setCurrPost(allPosts.post);
  }, [allPosts]);

  return (
    <HomeLayout
      content={
        <PostPageContent
          currUserId={currUserId}
          currPost={currPost}
          allComments={allComments}
        />
      }
    />
  );
};

const PostPageContent = ({ currUserId, currPost, allComments }) => {
  const PageWidth = "50%";
  return (
    <>
      <PostCard
        width={PageWidth}
        isCommentButtonVisible={false}
        isCreator={true}
        currUserId={currUserId}
        {...currPost}
      />
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="What are your thoughts?"
        buttonText="Comment"
        currUserId={currUserId}
        isPost={false}
      />
      {Array.isArray(allComments) &&
        allComments.map((comment, idx) => (
          <CommentCard
            key={idx}
            width={PageWidth}
            isCreator={comment.userId === currUserId}
            currUserId={currUserId}
            {...comment}
          />
        ))}
    </>
  );
};

export default PostPage;
