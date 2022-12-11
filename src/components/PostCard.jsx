import {
  DislikeOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Tag, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const PostTitle = () => {
  return (
    <Title
      level={3}
      style={{
        margin: "0px",
        padding: "10px",
      }}
    >
      This is my first forum post
    </Title>
  );
};

const PostTags = () => {
  return (
    <div style={{ padding: "0px 10px" }}>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
      <Tag>Tag 4</Tag>
    </div>
  );
};

const PostContent = () => {
  return (
    <Title
      level={5}
      style={{
        margin: "0px",
        padding: "10px",
      }}
    >
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </Title>
  );
};

const PostFooter = () => {
  const footerHeight = "30px";
  return (
    <Row
      align="middle"
      style={{
        width: "100%",
      }}
    >
      <Col>
        <Space
          size={10}
          style={{
            padding: "10px",
          }}
        >
          <LikeOutlined
            style={{
              fontSize: footerHeight,
            }}
          />
          <DislikeOutlined
            style={{
              fontSize: footerHeight,
            }}
          />
          <MessageOutlined
            twoToneColor="red"
            style={{
              fontSize: footerHeight,
            }}
          />
          <Title
            level={5}
            style={{
              margin: "0px",
            }}
          >
            10 Comments
          </Title>
        </Space>
      </Col>
      <Col flex="auto"></Col>
      <Col>
        <Title
          level={5}
          style={{
            margin: "0px",
            padding: "10px",
          }}
        >
          Posted by Bobby 12 December 2022, 16:40
        </Title>
      </Col>
    </Row>
  );
};

const PostCard = ({ width }) => {
  return (
    <Card
      style={{
        margin: "10px auto",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <Row>
        <PostTitle />
      </Row>
      <Row>
        <PostTags />
      </Row>
      <Row>
        <PostContent />
      </Row>
      <Row>
        <PostFooter />
      </Row>
    </Card>
  );
};

export default PostCard;
