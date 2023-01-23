import { Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import JsaskLogo from "../assets/JsaskLogo";
import JsaskSpin from "../assets/JsaskSpin";
import CreatePostCard from "../components/cards/CreatePostCard";
import SortPostCard from "../components/cards/SortPostCard";
import ListPostCards from "../components/compoundcomponents/ListPostCards";
import ManagePostForm from "../components/forms/ManagePostForm";
import HomeLayout from "../layouts/HomeLayout";
import { postAction, tagAction } from "../redux/actions";

const PageWidth = "50%";

const HomePage = () => {
  return <HomeLayout content={<HomePageContent />} />;
};

const HomePageContent = () => {
  const dispatch = useDispatch();

  const { post, tag, authentication } = useSelector((state) => state);
  const { user, isAuthenticatedSuccess } = authentication;
  const { id: currUserId } = user;
  const {
    allPosts,
    isAllPostsFetched,
    isPostPosted,
    isPostDeleted,
    isPostUpdated,
  } = post;
  const { allTags } = tag;

  const [queryParams] = useSearchParams(window.location.search);
  const sortKey = queryParams.get("sort");

  const [filterByTagsArray, setFilterByTagsArray] = useState([]);
  const [isCreatePostModalVisible, setIsCreatePostModalVisible] =
    useState(false);

  const handleOnFinishForm = (values) => {
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
  };

  const isPostLoaded =
    isPostDeleted && isPostPosted && isPostUpdated && isAllPostsFetched;

  useEffect(() => {
    if (isPostLoaded) {
      dispatch(postAction.fetchAllPosts(currUserId));
      dispatch(tagAction.fetchAllTags());
    }
  }, [
    isPostDeleted,
    isPostPosted,
    isPostUpdated,
    isAuthenticatedSuccess,
    currUserId,
  ]);

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
      <JsaskSpin spinning={!isPostLoaded}>
        <ListPostCards
          width={PageWidth}
          currUserId={currUserId}
          allPosts={allPosts}
          sortKey={sortKey}
          filterByTagsArray={filterByTagsArray}
          isAllPostsFetched={isAllPostsFetched}
        />
      </JsaskSpin>
      <Modal
        title="Create Post"
        open={isCreatePostModalVisible}
        onOk={() => setIsCreatePostModalVisible(false)}
        onCancel={() => setIsCreatePostModalVisible(false)}
        footer={[]}
      >
        <ManagePostForm
          submitButtonText="Post"
          onFinishForm={handleOnFinishForm}
        />
      </Modal>
    </>
  );
};

export default HomePage;
