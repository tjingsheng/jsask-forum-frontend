import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import SortPostCard from "../components/cards/SortPostCard";
import HomeLayout from "../layouts/HomeLayout";
import hasCommonElements from "../utils";

import sortKeyEnums from "../utils/enums.js";

const HomePage = () => {
  const [queryParams] = useSearchParams(window.location.search);
  const sortKey = queryParams.get("sort");

  return <HomeLayout content={<HomePageContent sortKey={sortKey} />} />;
};

const HomePageContent = ({ sortKey }) => {
  const PageWidth = "50%";
  const AllPosts = useSelector((state) => state.post.allPosts);
  const [filterByTagsArray, setFilterByTagsArray] = useState([]);

  // NEED TO FIX -->
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) => b.postDatetime > a.postDatetime,
    [sortKeyEnums.old]: (a, b) => a.postDatetime < b.postDatetime,
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

      {AllPosts.filter((post) =>
        hasCommonElements(post.tags, filterByTagsArray)
      )
        .sort(sortComparators[sortKey])
        .map((post, idx) => (
          <PostCard
            key={idx}
            width={PageWidth}
            isCommentButtonVisible={true}
            {...post}
          />
        ))}
    </>
  );
};

export default HomePage;
