import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Menu, Modal, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LogoutContent from "../../../components/LogoutContent";
import ProfileContent from "../../../components/ProfileContent";
import { authenticationAction } from "../../../Redux/actions";

import { headerHeight } from "../Header";

const ProfileMenu = ({ username }) => {
  const dispatch = useDispatch();
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleSubmenu = (e) => {
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
          onClick={handleSubmenu}
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
        title="You have successfully logged out"
        afterClose={() => dispatch(authenticationAction.logOut())}
        open={isLogoutModalVisible}
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
