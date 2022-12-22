import "@fontsource/poppins/300.css";
// import { ConfigProvider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import publicRoutes, { privateRoutes } from "./routes/routes";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  return (
    // <>
    //   <ConfigProvider
    //     theme={{
    //       token: {
    //         fontFamily: "Poppins",
    //         colorPrimary: "#2f55ff",
    //       },
    //     }}
    //   >
    <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />
    //   </ConfigProvider>
    // </>
  );
}

export default App;
