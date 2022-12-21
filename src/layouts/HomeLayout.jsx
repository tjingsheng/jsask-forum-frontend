import { Layout } from "antd";
import React from "react";
import ContentComponent from "./components/Content";
import FooterComponent, { footerHeight } from "./components/Footer";
import HeaderComponent, { headerHeight } from "./components/Header";

const HomeLayout = ({ content, username, ...props }) => (
  <Layout>
    <HeaderComponent username={username} />
    <ContentComponent
      style={{
        minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
      }}
      children={content}
    />
    <FooterComponent />
  </Layout>
);

export default HomeLayout;
