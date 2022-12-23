import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import SortPostCard from "../components/cards/SortPostCard";
import HomeLayout from "../layouts/HomeLayout";
import hasCommonElements from "../utils";

import sortKeyEnums from "../utils/enums.js";

const FROMBACKEND = [
  {
    postId: 5,
    userId: 1,
    datetime: "12 December 16:40",
    postTitle: "This is my fifth forum post",
    postContent: "This is life 5 by one",
    parent: -1,

    tags: ["tag 1", "tag 3"],

    username: "Bobby Lee One",

    commentCount: 23,

    likes: 29,
    isLikeSelected: true,
    isDislikeSelected: false,
  },
  {
    postId: 4,
    userId: 3,
    datetime: "11 December 15:40",
    postTitle: "This is my fourth forum post",
    postContent: "This is life 4 by three",
    parent: -1,

    tags: ["tag 2", "tag 4"],

    username: "Bobby Lee Three",

    commentCount: 63,

    likes: 30,
    isLikeSelected: false,
    isDislikeSelected: false,
  },
  {
    postId: 3,
    userId: 2,
    datetime: "10 December 13:40",
    postTitle: "This is my third forum post",
    postContent: "This is life 3 by two",
    parent: -1,

    tags: ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"],

    username: "Bobby Lee Two",

    commentCount: 14,

    likes: 15,
    isLikeSelected: false,
    isDislikeSelected: true,
  },
  {
    postId: 2,
    userId: 1,
    datetime: "4 December 12:40",
    postTitle: "This is my second forum post",
    postContent: "This is life 2 by one",
    parent: -1,

    tags: ["tag 2", "tag 1", "tag 3"],

    username: "Bobby Lee One",

    commentCount: 7,

    likes: 44,
    isLikeSelected: false,
    isDislikeSelected: false,
  },
  {
    postId: 1,
    userId: 5,
    datetime: "1 December 12:40",
    postTitle: "This is my first forum post",
    postContent: "This is life 1 by five",
    parent: -1,

    tags: ["tag 4", "tag 2"],

    username: "Bobby Lee Five",

    commentCount: 12,

    likes: 16,
    isLikeSelected: false,
    isDislikeSelected: false,
  },
];

const HomePage = () => {
  const [queryParams] = useSearchParams(window.location.search);
  const sortKey = queryParams.get("sort");

  return <HomeLayout content={<HomePageContent sortKey={sortKey} />} />;
};

const HomePageContent = ({ sortKey }) => {
  const PageWidth = "50%";

  const [filterByTagsArray, setFilterByTagsArray] = useState([]);

  // NEED TO FIX -->
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) => b.datetime > a.datetime,
    [sortKeyEnums.old]: (a, b) => a.datetime < b.datetime,
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
