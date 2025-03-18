import { Layout } from "antd";
import React from "react";
import { Messages } from "../../constants";

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer
    style={{
      alignItems: "center",
      display: "flex",
      height: footerHeight,
      justifyContent: "center",
    }}
  >
    {Messages.FOOTER_MESSAGE}
  </Footer>
);

export const footerHeight = 60;
export default FooterComponent;
