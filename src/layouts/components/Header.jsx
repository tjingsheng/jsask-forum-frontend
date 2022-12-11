import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Input, Layout, Menu, Row } from "antd";
import React from "react";

const { useState } = React;
const { Search } = Input;
const { Header } = Layout;
const headerHeight = 60;

const Logo = () => {
  return (
    <>
      <img
        src="..\LogoYellow.svg"
        alt="LogoYellow"
        style={{
          float: "left",
          height: headerHeight,
          padding: "8px 0px",
        }}
      />
      <img
        src="..\LogoWord.svg"
        alt="LogoWord"
        style={{
          float: "left",
          height: headerHeight,
          padding: "16px 0px 10px",
        }}
      />
    </>
  );
};

const SearchBox = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Search
      size="large"
      placeholder="Search Jsask"
      allowClear
      onSearch={onSearch}
      style={{
        float: "left",
        height: headerHeight,
        padding: "10px 0px",
      }}
    />
  );
};

const AvatarIcon = () => {
  return (
    <Avatar
      size="large"
      icon={<UserOutlined />}
      shape="square"
      style={{
        float: "right",
        margin: "10px 0px 10px 0px",
      }}
    />
  );
};

const ProfileMenu = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: "Bobby Lee",
      key: "Menu",
      children: [
        {
          label: "Profile",
        },
        {
          label: "Logout",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{
        float: "left",
        height: headerHeight,
      }}
    />
  );
};

const HeaderComponent = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        height: headerHeight,
        padding: "0px 20px 0px 20px",
        backgroundColor: "white",
      }}
    >
      <Row>
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8}>
          <SearchBox />
        </Col>
        <Col span={6}>
          <AvatarIcon />
        </Col>
        <Col span={2}>
          <ProfileMenu />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
