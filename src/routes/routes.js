import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/home";

const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: < ErrorMessage />
    },
    {
      path: "home",
      element: <HomeLayout content={<HomePage/>} />,
      errorElement: < ErrorMessage />
    },
  ]);
  
export default routes;
