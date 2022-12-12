import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/notfound";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
  },
  {
    path: "home",
    element: <HomeLayout content={<HomePage />} />,
  },
]);

export default routes;
