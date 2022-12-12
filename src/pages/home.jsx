import React from "react";
import CreatePostCard from "../components/CreatePostCard";
import PostCard from "../components/PostCard";
import SortPostCard from "../components/SortPostCard";
import HomeLayout from "../layouts/HomeLayout";

const PageWidth = "50%";
const HomePageContent = () => (
  <div>
    <CreatePostCard width={PageWidth} />
    <SortPostCard width={PageWidth} />
    <PostCard width={PageWidth} />
    <PostCard width={PageWidth} />
    <PostCard width={PageWidth} />
    <PostCard width={PageWidth} />
  </div>
);
const HomePage = () => <HomeLayout content={<HomePageContent />} />;

export default HomePage;
