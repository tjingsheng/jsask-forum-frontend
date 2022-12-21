import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer
    style={{
      height: footerHeight,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    Jsask © 2022 Created by Tan Jing Sheng
  </Footer>
);

export const footerHeight = 60;
export default FooterComponent;
