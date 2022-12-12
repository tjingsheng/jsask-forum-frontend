import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/notfound";
import PostPage from "../pages/post";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "post",
    element: <PostPage />,
  },
]);

export default routes;
