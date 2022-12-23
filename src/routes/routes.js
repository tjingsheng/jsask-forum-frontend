import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/notfound";
import PostPage from "../pages/post";

export const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <LoginPage />,
  },
]);

export default publicRoutes;
