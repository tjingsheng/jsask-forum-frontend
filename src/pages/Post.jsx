import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentCard from "../components/cards/CommentCard";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import HomeLayout from "../layouts/HomeLayout";
import { postAction } from "../redux/actions";

const PostPage = () => {
  return <HomeLayout content={<PostPageContent />} />;
};

const PostPageContent = () => {
  const dispatch = useDispatch();

  const currUserId = useSelector((state) => state.authentication.user.id);
  const allPosts = useSelector((state) => state.post.currPost);

  const [queryParams] = useSearchParams(window.location.search);
  const currPostId = queryParams.get("postId");

  const isNewPostPosted = useSelector((state) => state.post.isNewPostPosted);
  const isPostDeleted = useSelector((state) => state.post.isPostDeleted);
  const isPostUpdated = useSelector((state) => state.post.isPostUpdated);
  const isPutPostPreferenceSuccess = useSelector(
    (state) => state.postPreference.isPutPostPreferenceSuccess
  );

  useEffect(() => {
    dispatch(
      postAction.fetchCurrPost({ userId: currUserId, postId: currPostId })
    );
  }, [
    isNewPostPosted,
    isPostDeleted,
    isPostUpdated,
    isPutPostPreferenceSuccess,
  ]);

  const submitComment = (values) => {
    if (values.postContent !== undefined) {
      dispatch(
        postAction.createNewPost({
          userId: currUserId,
          postTitle: "NONE",
          postContent: values.postContent,
          parentPost: allPosts.post.postId,
        })
      );
    }
  };

  const PageWidth = "50%";

  return (
    <>
      <PostCard
        width={PageWidth}
        isCommentButtonVisible={false}
        isCreator={true}
        currUserId={currUserId}
        {...allPosts.post}
      />
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="What are your thoughts?"
        buttonText="Comment"
        handleOnFinish={submitComment}
        handleOnClickCreatePostInput={() => {}}
        handleOnClickCreatePostButton={() => {}}
      />
      {Array.isArray(allPosts.comments) &&
        allPosts.comments.map((comment, idx) => (
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
