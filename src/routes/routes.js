import React from "react";
import { createBrowserRouter } from "react-router-dom";

const pages = "pages";
const components = "components";

const NavigationBar = React.lazy(() => import(`../${components}/navigationBar`))
const ContactPage = React.lazy(() => import(`../${pages}/contacts`));
const ErrorPage = React.lazy(() => import(`../${pages}/error`));

const routes = createBrowserRouter([
    {
      path: "/",
      element:  < NavigationBar />,
      errorElement: < ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: < ContactPage />,
        },
      ],
    }
  ]);
  
export default routes;
