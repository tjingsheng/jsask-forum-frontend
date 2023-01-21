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

  const { post, authentication } = useSelector((state) => state);
  const { user } = authentication;
  const { id: currUserId } = user;
  const {
    currPost,
    isPostPosted,
    isPostDeleted,
    isCurrPostFetched,
    currPostKeys,
  } = post;
  const { postId: currPostId } = currPostKeys;

  const [queryParams] = useSearchParams(window.location.search);
  const newPostId = queryParams.get("postId");

  useEffect(() => {
    dispatch(postAction.fetchAllPosts(currUserId));
    dispatch(
      postAction.fetchCurrPost({ userId: currUserId, postId: newPostId })
    );
  }, [isPostPosted, isPostDeleted, currUserId, newPostId]);

  const submitComment = (values) => {
    if (values.postContent !== undefined) {
      dispatch(
        postAction.createNewPost({
          userId: currUserId,
          postTitle: "NONE",
          postContent: values.postContent,
          parentPost: currPost.post.postId,
        })
      );
    }
  };

  return (
    <Spin spinning={currPostId !== newPostId}>
      {isCurrPostFetched && (
        <>
          <PostCard
            width={PageWidth}
            isCommentButtonVisible={false}
            isCreator={true}
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
    </Spin>
  );
};

export default PostPage;
