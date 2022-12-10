import { Layout } from "antd";
import React from "react";
import ContentComponent from "../components/Content";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";


const MainLayout = ({ children, ...props }) => {
  return (
    <Layout>
        <HeaderComponent />
        <ContentComponent children= { children } />
        <FooterComponent />
  </Layout>
  );
};

export default MainLayout;
