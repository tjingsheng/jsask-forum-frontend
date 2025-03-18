import React from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import publicRoutes, { privateRoutes } from "./routes/routes";
import { Card } from "antd";
import { WarningCard } from "./components/cards/WarningCard";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated,
  );
  return (
    <>
      <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />
      <WarningCard />
    </>
  );
}

export default App;
