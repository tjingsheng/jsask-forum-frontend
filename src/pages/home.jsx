import React from "react";
import { useSearchParams } from "react-router-dom";
import CreatePostCard from "../components/postcomponents/CreatePostCard";
import PostCard from "../components/postcomponents/PostCard";
import SortPostCard from "../components/postcomponents/SortPostCard";
import HomeLayout from "../layouts/HomeLayout";
import sortKeyEnums from "../utils/enums";

const FROMUSERINFO = {
  username: "Bobby Lee",
};

const FROMBACKEND = [
  {
    postId: 1,
    postTitle: "This is my first forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
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
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: 12,
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
      {/* FOR TESTING ---> */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        This is the value of sort taken from the URL is: {sortKey}
      </div>
      {/* <--- FOR TESTING */}
      <SortPostCard width={PageWidth} sortKey={sortKey} />
      {FROMBACKEND.sort(sortComparators[sortKey]).map((post) => (
        <PostCard width={PageWidth} isCommentButtonVisible={true} {...post} />
      ))}
    </>
  );
};

export default HomePage;
