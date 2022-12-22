import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Menu, Modal, Row } from "antd";
import React, { useState } from "react";
import LogoutContent from "../../../components/LogoutContent";
import ProfileContent from "../../../components/ProfileContent";
import { headerHeight } from "../Header";

const ProfileMenu = ({ username }) => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const showModal = (e) => {
    if (e["key"] === "profile") {
      setIsProfileModalVisible(true);
    } else if (e["key"] === "logout") {
      setIsLogoutModalVisible(true);
    } else {
      setIsLogoutModalVisible(false);
      setIsProfileModalVisible(false);
    }
  };

  const handleOk = () => {
    setIsLogoutModalVisible(false);
    setIsProfileModalVisible(false);
  };

  const handleCancel = () => {
    setIsLogoutModalVisible(false);
    setIsProfileModalVisible(false);
  };

  const items = [
    {
      label: username,
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
    <Row justify="end">
      <Col align="middle">
        <Avatar size="large" icon={<UserOutlined />} shape="square" />
      </Col>
      <Col>
        <Menu
          onClick={showModal}
          mode="horizontal"
          items={items}
          overflowedIndicator={<DownOutlined />}
          style={{
            height: headerHeight,
          }}
        />
      </Col>
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
    </Row>
  );
};

export default ProfileMenu;
