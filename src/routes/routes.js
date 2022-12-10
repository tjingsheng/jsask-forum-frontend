import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const routes = createBrowserRouter([
    {
      path: "/",
      element:  <div> hi </div>,
      errorElement: < ErrorMessage />
    },
    {
      path: "home",
      element: <div> hihome </div>, //< Header />,
    },
  ]);
  
export default routes;
