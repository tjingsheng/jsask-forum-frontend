import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/postcomponents/CreatePostCard";
import PostCard from "../components/postcomponents/PostCard";
import SortPostCard from "../components/postcomponents/SortPostCard";
import HomeLayout from "../layouts/HomeLayout";
import hasCommonElements from "../utils";
import sortKeyEnums from "../utils/enums.js";

const FROMUSERINFO = {
  username: "Bobby Lee",
};

const FROMBACKEND = [
  {
    postId: 1,
    postTitle: "This is my first forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 3"],
    commentCount: 15,
    postContent: "This is life",
    isLikeSelected: true,
    isDislikeSelected: false,
  },
  {
    postId: 2,
    postTitle: "This is my 2nd forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: 3,
    postContent: "what is 1 + 1?",
    isLikeSelected: false,
    isDislikeSelected: true,
  },
  {
    postId: 3,
    postTitle: "This is my 3rd forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 3"],
    commentCount: 12,
    postContent: "ni hao ni hao",
    isLikeSelected: false,
    isDislikeSelected: false,
  },
  {
    postId: 4,
    postTitle: "This is my 4th forum post",
    username: "Sussy Lee",
    datetime: "12 May 16:40",
    tags: ["tag 2", "tag 4"],
    commentCount: 17,
    postContent: "ni hao ni hao",
    isLikeSelected: false,
    isDislikeSelected: false,
  },
];

const HomePage = () => {
  const [queryParams] = useSearchParams(window.location.search);
  const sortKey = queryParams.get("sort");
  return (
    <HomeLayout
      content={<HomePageContent sortKey={sortKey} />}
      username={FROMUSERINFO.username}
    />
  );
};

const HomePageContent = ({ sortKey }) => {
  const PageWidth = "50%";

  const [filterByTagsArray, setFilterByTagsArray] = useState([]);

  // NEED TO FIX -->
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => a.commentCount - b.commentCount,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) => b.postId - a.postId,
    [sortKeyEnums.old]: (a, b) => b.commentCount - a.commentCount,
  };
  // <-- NEED TO FIX

  return (
    <>
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="Create Post"
        buttonText="Post"
        isCreatePost
      />
      <SortPostCard
        width={PageWidth}
        sortKey={sortKey}
        handleChange={setFilterByTagsArray}
      />
      {FROMBACKEND.filter((post) =>
        hasCommonElements(post.tags, filterByTagsArray)
      )
        .sort(sortComparators[sortKey])
        .map((post) => (
          <PostCard width={PageWidth} isCommentButtonVisible={true} {...post} />
        ))}
    </>
  );
};

export default HomePage;
