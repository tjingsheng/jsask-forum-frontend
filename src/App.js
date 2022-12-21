import "@fontsource/poppins/300.css";
// import { ConfigProvider } from "antd";
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
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
    <RouterProvider router={routes} />
    //   </ConfigProvider>
    // </>
  );
}

export default App;
