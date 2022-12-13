import React from "react";
import CreatePostCard from "../components/postcomponents/CreatePostCard";
import PostCard from "../components/postcomponents/PostCard";
import SortPostCard from "../components/postcomponents/SortPostCard";
import HomeLayout from "../layouts/HomeLayout";

const FROMBACKEND = [
  {
    postTitle: "This is my first forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: "10",
    postContent: "penis penis",
  },
  {
    postTitle: "This is my 2nd forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: "10",
    postContent: "penis penis",
  },
  {
    postTitle: "This is my 3rd forum post",
    username: "Bobby Lee",
    datetime: "12 December 16:40",
    tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
    commentCount: "10",
    postContent: "penis penis",
  },
];

const PageWidth = "50%";
const HomePageContent = () => (
  <>
    <CreatePostCard
      width={PageWidth}
      inputPlaceholder="Create Post"
      buttonText="Post"
      isCreatePost
    />
    <SortPostCard width={PageWidth} />
    {FROMBACKEND.map((post) => (
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
    ))}
  </>
);

const HomePage = () => <HomeLayout content={<HomePageContent />} />;

export default HomePage;
