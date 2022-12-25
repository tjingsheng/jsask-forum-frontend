import { Col, Layout, Row } from "antd";
import React from "react";
import Logo from "./headercomponents/HeaderLogo";
import ProfileMenu from "./headercomponents/HeaderProfileMenu";
import SearchBox from "./headercomponents/HeaderSearchBox";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        backgroundColor: "white",
        height: headerHeight,
        overflow: "hidden",
        padding: "0px 20px 0px 20px",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8}>
          <SearchBox />
        </Col>
        <Col span={8}>
          <ProfileMenu />
        </Col>
      </Row>
    </Header>
  );
};

export const headerHeight = 60;
export default HeaderComponent;
