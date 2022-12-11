import React from "react";
import CreatePostCard from "../components/CreatePostCard";
import PostCard from "../components/PostCard";
import SortPostCard from "../components/SortPostCard";

const HomePage = () => {
  const PageWidth = "50%";
  return (
    <div>
      <CreatePostCard width={PageWidth} />
      <SortPostCard width={PageWidth} />
      <PostCard width={PageWidth} />
      <PostCard width={PageWidth} />
      <PostCard width={PageWidth} />
      <PostCard width={PageWidth} />
    </div>
  );
};

export default HomePage;
