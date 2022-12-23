import { Layout } from "antd";
import React from "react";
import ContentComponent from "./components/Content";
import FooterComponent, { footerHeight } from "./components/Footer";

const LoginLayout = ({ leftColumn, rightColumn }) => (
  <Layout>
    <div
      style={{
        alignItems: "center",
        display: "flex",
        minHeight: `calc(100vh - ${footerHeight}px)`,
      }}
    >
      <ContentComponent style={{ width: "50%" }} children={leftColumn} />
      <ContentComponent style={{ width: "50%" }} children={rightColumn} />
    </div>

    <FooterComponent />
  </Layout>
);

export default LoginLayout;
