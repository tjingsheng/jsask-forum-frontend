import React from "react";
import JsaskLogo from "../../../assets/JsaskLogo";
import { headerHeight } from "../Header";

const Logo = () => (
  <>
    <JsaskLogo
      size={headerHeight}
      style={{
        float: "left",
        padding: "8px 0px",
      }}
    />
    <img
      src="../LogoWord.svg"
      alt="Jsask"
      style={{
        float: "left",
        height: headerHeight,
        padding: "16px 0px 10px",
      }}
    />
  </>
);

export default Logo;
