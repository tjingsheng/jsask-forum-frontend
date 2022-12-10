import React from "react";
import {
  RouterProvider
} from "react-router-dom";
import './App.css';
import MainLayout from "./layouts/MainLayout";
import routes from "./routes/routes";



function App() {
  return (
    <MainLayout>
      <RouterProvider router={routes} />
    </ MainLayout>
  );
}

export default App;
