import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
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

  const currUserId = useSelector((state) => state.authentication.user.id);
  const allPosts = useSelector((state) => state.post.currPost);

  const [queryParams] = useSearchParams(window.location.search);
  const currPostId = queryParams.get("postId");

  const isPostPosted = useSelector((state) => state.post.isPostPosted);
  const isPostDeleted = useSelector((state) => state.post.isPostDeleted);
  const isPostUpdated = useSelector((state) => state.post.isPostUpdated);
  const isPutPostPreferenceSuccess = useSelector(
    (state) => state.postPreference.isPutPostPreferenceSuccess
  );
  const isCurrPostFetched = useSelector(
    (state) => state.post.isCurrPostFetched
  );

  useEffect(() => {
    dispatch(postAction.fetchAllPosts(currUserId));
    dispatch(
      postAction.fetchCurrPost({ userId: currUserId, postId: currPostId })
    );
  }, [isPostPosted, isPostDeleted, isPostUpdated, isPutPostPreferenceSuccess]);

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

  return (
    <Spin spinning={!isCurrPostFetched}>
      {isCurrPostFetched && (
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
            onFinishFunc={submitComment}
          />

          <ListCommentCards
            width={PageWidth}
            currUserId={currUserId}
            allComments={allPosts.comments}
          />
        </>
      )}
    </Spin>
  );
};

export default PostPage;
