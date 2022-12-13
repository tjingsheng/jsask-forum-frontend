import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

const ContentComponent = ({ children }) => (
  <Content
    style={{
      minHeight: "calc(100vh - 127px)",
    }}
  >
    {children}
  </Content>
);

export default ContentComponent;
