import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar, { loader as rootLoader } from "../components/root";
import Contact from "../pages/contacts";
import ErrorPage from "../pages/error";



const routes = createBrowserRouter([
    {
      path: "/",
      element:  < NavBar />,
      errorElement: < ErrorPage />,
      loader: rootLoader,
      children: [
        {
          path: "contacts/:contactId",
          element: < Contact />,
          
        },
      ],
    }
  ]);
  
export default routes;
