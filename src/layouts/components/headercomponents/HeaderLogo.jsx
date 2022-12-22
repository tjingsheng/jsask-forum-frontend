import React from "react";
import JsaskLogo from "../../../assets/JsaskLogo";
import JsaskWord from "../../../assets/JsaskWord";

import { headerHeight } from "../Header";

const Logo = () => (
  <>
    <JsaskLogo
      height={headerHeight}
      width={headerHeight * 0.5}
      style={{
        float: "left",
        padding: "8px 0px",
      }}
    />
    <JsaskWord
      height={headerHeight}
      width={headerHeight * 1.5}
      style={{
        float: "left",
        padding: "10px 0px",
      }}
    />
  </>
);

export default Logo;
