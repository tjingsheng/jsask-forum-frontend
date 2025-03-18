import { Layout } from "antd";
import React from "react";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";

const LoginLayout = ({ content }) => (
  <Layout>
    <ContentComponent children={content} />
    <FooterComponent />
  </Layout>
);

export default LoginLayout;
