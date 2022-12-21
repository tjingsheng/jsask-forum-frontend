import { DownOutlined } from "@ant-design/icons";
import { Button, Menu, Modal } from "antd";
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
    <>
      <Menu
        onClick={showModal}
        mode="horizontal"
        items={items}
        overflowedIndicator={<DownOutlined />}
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

export default ProfileMenu;
