import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Route } from "../constants";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/NotFound";
import PostPage from "../pages/Post";

export const privateRoutes = createBrowserRouter([
  {
    path: Route.home,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: Route.post,
    element: <PostPage />,
  },
]);

const publicRoutes = createBrowserRouter([
  {
    path: Route.home,
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: Route.post,
    element: <Navigate to={Route.home} replace={true} />,
  },
]);

export default publicRoutes;
