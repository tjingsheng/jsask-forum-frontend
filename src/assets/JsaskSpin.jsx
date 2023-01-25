import { Spin } from "antd";
import JsaskLogo from "./JsaskLogo";

const JsaskSpin = ({ ...props }) => {
  const customIcon = (
    <JsaskLogo
      id="loading"
      style={{ fontSize: "10vw", top: "10vh", left: "45vw" }}
    />
  );
  return <Spin indicator={customIcon} {...props} />;
};
export default JsaskSpin;
