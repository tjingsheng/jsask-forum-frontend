import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/NotFound";
import PostPage from "../pages/Post";

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
