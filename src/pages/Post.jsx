import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import JsaskSpin from "../assets/JsaskSpin";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import ListCommentCards from "../components/compoundcomponents/ListCommentCards";
import HomeLayout from "../layouts/HomeLayout";
import { postAction } from "../redux/actions";

const PageWidth = "50%";

const PostPage = () => {
  return <HomeLayout content={<PostPageContent />} />;
};

const PostPageContent = () => {
  const dispatch = useDispatch();

  const { post, authentication } = useSelector((state) => state);
  const { user } = authentication;
  const { id: currUserId } = user;
  const {
    currPost,
    isCurrPostFetched,
    isPostDeleted,
    isPostPosted,
    isPostUpdated,
  } = post;
  const isCurrPostLoaded =
    isPostDeleted && isPostPosted && isPostUpdated && isCurrPostFetched;
  const [queryParams] = useSearchParams(window.location.search);
  const newPostId = queryParams.get("postId");

  useEffect(() => {
    if (isCurrPostLoaded) {
      dispatch(
        postAction.fetchCurrPost({ userId: currUserId, postId: newPostId }),
      );
    }
  }, [isPostPosted, isPostDeleted, isPostUpdated, currUserId, newPostId]);

  const submitComment = (values) => {
    if (values.postContent) {
      dispatch(
        postAction.createNewPost({
          userId: currUserId,
          postTitle: "NONE",
          postContent: values.postContent,
          parentPost: currPost.post.postId,
        }),
      );
    }
  };

  return (
    <>
      <JsaskSpin spinning={!isCurrPostLoaded}>
        {isCurrPostFetched && (
          <>
            <PostCard
              width={PageWidth}
              isCommentButtonVisible={false}
              currUserId={currUserId}
              {...currPost.post}
            />
            <CreatePostCard
              width={PageWidth}
              inputPlaceholder="What are your thoughts?"
              buttonText="Comment"
              onFinishFunc={submitComment}
            />
            <ListCommentCards
              width={PageWidth}
              currUserId={currUserId}
              allComments={currPost.comments}
            />
          </>
        )}
      </JsaskSpin>
    </>
  );
};

export default PostPage;
