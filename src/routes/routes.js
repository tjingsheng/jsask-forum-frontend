import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const routes = createBrowserRouter([
    {
      path: "/",
      element:  <div       style={{
        backgroundColor: "#DAE0E6"
      }}>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      hi <br/>
                      </div>,
      errorElement: < ErrorMessage />
    },
    {
      path: "home",
      element: <div> hihome </div>, //< Header />,
    },
  ]);
  
export default routes;
