import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/cards/CreatePostCard";
import NoContentCard from "../components/cards/NoContentCard";
import PostCard from "../components/cards/PostCard";
import SortPostCard from "../components/cards/SortPostCard";
import ManagePostForm from "../components/forms/ManagePostForm";
import HomeLayout from "../layouts/HomeLayout";
import { postAction } from "../redux/actions";
// import { postAction } from "../redux/actions";
import hasCommonElements from "../utils";

import sortKeyEnums from "../utils/enums.js";

const HomePage = () => {
  const [queryParams] = useSearchParams(window.location.search);
  const AllPosts = useSelector((state) => state.post.allPosts);
  const currUserId = useSelector((state) => state.authentication.user.id);
  const sortKey = queryParams.get("sort");

  return (
    <HomeLayout
      content={
        <HomePageContent
          sortKey={sortKey}
          allPosts={AllPosts}
          currUserId={currUserId}
        />
      }
    />
  );
};

const HomePageContent = ({ sortKey, allPosts, currUserId }) => {
  const dispatch = useDispatch();
  const PageWidth = "50%";
  const [filterByTagsArray, setFilterByTagsArray] = useState([]);
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) =>
      new Date(a.postDatetime).getTime() - new Date(b.postDatetime).getTime(),
    [sortKeyEnums.old]: (a, b) =>
      new Date(b.postDatetime).getTime() - new Date(a.postDatetime).getTime(),
  };

  const [isCreatePostModalVisible, setIsCreatePostModalVisible] = useState(
    false
  );

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
      />

      {Array.isArray(allPosts) && allPosts.length === 0 ? (
        <NoContentCard width={PageWidth} message="There are no posts yet" />
      ) : (
        allPosts
          .filter((post) => hasCommonElements(post.tags, filterByTagsArray))
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
          onFinishFunc={(values) => {
            setIsCreatePostModalVisible(false);
            dispatch(
              postAction.createNewPost({
                userId: currUserId,
                postTitle: values.postTitle,
                postContent: values.postContent,
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
