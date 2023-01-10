import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/cards/CreatePostCard";
import NoContentCard from "../components/cards/NoContentCard";
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

  // NEED REPAIR FOR DATE SORTING
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) =>
      new Date(b.postDatetime).getTime() < new Date(a.postDatetime).getTime(),
    [sortKeyEnums.old]: (a, b) =>
      new Date(b.postDatetime).getTime() > new Date(a.postDatetime).getTime(),
  };

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

      {Array.isArray(AllPosts) && AllPosts.length === 0 ? (
        <NoContentCard width={PageWidth} message="There are no posts yet" />
      ) : (
        AllPosts.filter((post) =>
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
          ))
      )}
    </>
  );
};

export default HomePage;
