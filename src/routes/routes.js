import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/notfound";
import PostPage from "../pages/post";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
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
