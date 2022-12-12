import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Input, Layout, Menu, Modal, Row } from "antd";
import React from "react";
import LogoutContent from "../../components/LogoutContent";
import ProfileContent from "../../components/ProfileContent";

const { useState } = React;
const { Search } = Input;
const { Header } = Layout;
const headerHeight = 60;

const Logo = () => (
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

const AvatarIcon = () => (
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

const ProfileMenu = () => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const setAllStateFalse = () => {
    setIsLogoutModalVisible(false);
    setIsProfileModalVisible(false);
  };

  const showModal = (e) => {
    if (e["key"] === "profile") {
      setIsProfileModalVisible(true);
    } else if (e["key"] === "logout") {
      setIsLogoutModalVisible(true);
    } else {
      setAllStateFalse();
    }
  };

  const handleOk = () => {
    setAllStateFalse();
  };

  const handleCancel = () => {
    setAllStateFalse();
  };

  const items = [
    {
      label: "Bobby Lee",
      key: "Menu",
      children: [
        {
          label: "Profile",
          key: "profile",
        },
        {
          label: "Logout",
          key: "logout",
        },
      ],
    },
  ];

  return (
    <>
      <Menu
        onClick={showModal}
        mode="horizontal"
        items={items}
        style={{
          float: "left",
          height: headerHeight,
        }}
      />
      <Modal
        title="Your Profile"
        open={isProfileModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="Ok" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <ProfileContent />
      </Modal>
      <Modal
        title="You have logout"
        open={isLogoutModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="Ok" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <LogoutContent />
      </Modal>
    </>
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
