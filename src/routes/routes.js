import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/root";
import Contact from "../pages/contacts";
import ErrorPage from "../pages/error";



const routes = createBrowserRouter([
    {
      path: "/home",
      element:  < NavBar />,
      errorElement: < ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: < Contact />,
          
        },
      ],
    }
  ]);
  
export default routes;
