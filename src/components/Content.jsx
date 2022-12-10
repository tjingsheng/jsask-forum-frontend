import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

const ContentComponent = ({ children }) => {
  return (
    <Content>
      {children}
    </Content>
  );
};

export default ContentComponent;