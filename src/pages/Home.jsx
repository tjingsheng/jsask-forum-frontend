import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/cards/CreatePostCard";
import NoContentCard from "../components/cards/NoContentCard";
import PostCard from "../components/cards/PostCard";
import SortPostCard from "../components/cards/SortPostCard";
import ManagePostForm from "../components/forms/ManagePostForm";
import HomeLayout from "../layouts/HomeLayout";
import { postAction, tagAction } from "../redux/actions";
import hasCommonElements from "../utils";
import sortKeyEnums from "../utils/enums.js";

const HomePage = () => {
  return <HomeLayout content={<HomePageContent />} />;
};

const HomePageContent = () => {
  const dispatch = useDispatch();

  const currUserId = useSelector((state) => state.authentication.user.id);
  const allPosts = useSelector((state) => state.post.allPosts);
  const allTags = useSelector((state) => state.tag.allTags);

  const [queryParams] = useSearchParams(window.location.search);
  const sortKey = queryParams.get("sort");
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) =>
      new Date(b.postDatetime).getTime() - new Date(a.postDatetime).getTime(),
    [sortKeyEnums.old]: (a, b) =>
      new Date(a.postDatetime).getTime() - new Date(b.postDatetime).getTime(),
  };

  const isNewPostPosted = useSelector((state) => state.post.isNewPostPosted);
  const isPostDeleted = useSelector((state) => state.post.isPostDeleted);
  const isPostUpdated = useSelector((state) => state.post.isPostUpdated);
  const isPutPostPreferenceSuccess = useSelector(
    (state) => state.postPreference.isPutPostPreferenceSuccess
  );
  const isAuthenticatedSuccess = useSelector(
    (state) => state.authentication.isAuthenticatedSuccess
  );

  useEffect(() => {
    dispatch(postAction.fetchAllPosts(currUserId));
    dispatch(tagAction.fetchAllTags());
  }, [
    isNewPostPosted,
    isPostDeleted,
    isPostUpdated,
    isPutPostPreferenceSuccess,
    isAuthenticatedSuccess,
  ]);

  const [filterByTagsArray, setFilterByTagsArray] = useState([]);
  const [isCreatePostModalVisible, setIsCreatePostModalVisible] = useState(
    false
  );

  const PageWidth = "50%";

  return (
    <>
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="Create Post"
        buttonText="Post"
        handleOnClickCreatePostInput={setIsCreatePostModalVisible}
        handleOnClickCreatePostButton={setIsCreatePostModalVisible}
      />
      <SortPostCard
        width={PageWidth}
        sortKey={sortKey}
        handleChange={setFilterByTagsArray}
        allTags={allTags}
      />

      {Array.isArray(allPosts) && allPosts.length === 0 ? (
        <NoContentCard width={PageWidth} message="There are no posts yet" />
      ) : (
        allPosts
          .filter((post) =>
            filterByTagsArray.length > 0
              ? hasCommonElements(post.tags, filterByTagsArray)
              : true
          )
          .sort(sortComparators[sortKey])
          .map((post, idx) => (
            <PostCard
              key={idx}
              width={PageWidth}
              isCommentButtonVisible={true}
              isCreator={currUserId === post.userId}
              currUserId={currUserId}
              {...post}
            />
          ))
      )}

      <Modal
        title="Create Post"
        open={isCreatePostModalVisible}
        onOk={() => setIsCreatePostModalVisible(false)}
        onCancel={() => setIsCreatePostModalVisible(false)}
        footer={[]}
      >
        <ManagePostForm
          submitButtonText="Post"
          onFinishFunc={(values) => {
            setIsCreatePostModalVisible(false);
            dispatch(
              postAction.createNewPost({
                userId: currUserId,
                postTitle: values.postTitle,
                postContent: values.postContent,
                tags: values.tags,
                parentPost: 0,
              })
            );
          }}
        />
      </Modal>
    </>
  );
};

export default HomePage;
