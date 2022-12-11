import React from "react";
import CreatePostCard from "../components/CreatePostCard";
import SortingCard from "../components/SortingCard";

const HomePage = () => {
  return (
    <div>
      <CreatePostCard width="50%" />
      <SortingCard width="50%" />
    </div>
  );
};

export default HomePage;
