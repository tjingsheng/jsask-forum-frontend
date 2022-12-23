import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Menu, Modal, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutContent from "../../../components/LogoutContent";
import ProfileContent from "../../../components/ProfileContent";
import { authenticationAction, userAction } from "../../../redux/actions";

import { headerHeight } from "../Header";

const ProfileMenu = () => {
  const username = useSelector((state) => state.user.username);
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

  const handleCloseAllModals = () => {
    setIsLogoutModalVisible(false);
    setIsProfileModalVisible(false);
  };

  const handleLogout = () => {
    handleCloseAllModals();
    dispatch(authenticationAction.logout());
    dispatch(userAction.resetUsername());
    dispatch(userAction.resetUserId());
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
      <Row justify="end">
        <Col
          span={16}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          body
        >
          <Avatar size="large" icon={<UserOutlined />} shape="square" />
        </Col>
        <Col span={8}>
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
      </Row>
      <Modal
        title="Your Profile"
        open={isProfileModalVisible}
        onCancel={handleCloseAllModals}
        footer={[
          <Button key="Ok" onClick={handleCloseAllModals}>
            Ok
          </Button>,
        ]}
      >
        <ProfileContent />
      </Modal>
      <Modal
        title="Logout Confirmation"
        open={isLogoutModalVisible}
        onCancel={handleCloseAllModals}
        footer={[
          <Button key="Yes" onClick={handleLogout}>
            Yes
          </Button>,
          <Button key="No" onClick={handleCloseAllModals}>
            No
          </Button>,
        ]}
      >
        <LogoutContent />
      </Modal>
    </>
  );
};

export default ProfileMenu;
