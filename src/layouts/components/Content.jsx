import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

const ContentComponent = ({ style, children }) => (
  <Content style={style}>{children}</Content>
);

export default ContentComponent;
