import { Layout } from "antd";
import React from "react";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";

const HomeLayout = ({ content, username, ...props }) => (
  <Layout>
    <HeaderComponent />
    <ContentComponent children={content} />
    <FooterComponent />
  </Layout>
);

export default HomeLayout;
