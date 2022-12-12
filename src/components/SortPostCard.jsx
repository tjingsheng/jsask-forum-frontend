import { FireOutlined, HistoryOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";

const SortNewButton = () => (
  <Button
    icon={<StarOutlined />}
    style={{
      width: "75px",
    }}
  >
    New
  </Button>
);

const SortOldButton = () => (
  <Button
    icon={<HistoryOutlined />}
    style={{
      width: "75px",
    }}
  >
    Old
  </Button>
);

const SortBestButton = () => (
  <Button
    icon={<FireOutlined />}
    style={{
      width: "75px",
    }}
  >
    Hot
  </Button>
);

const SelectTag = () => (
  <Select
    mode="tags"
    placeholder="Sort by Tags"
    style={{
      width: "100%",
    }}
  />
);

const SortPostCard = ({ width, height }) => (
  <Card
    style={{
      size: "small",
      margin: "10px auto",
      padding: "10px",
      height: height,
      width: width,
    }}
    bodyStyle={{
      padding: "0",
    }}
  >
    <Row align="middle">
      <Col>
        <Space
          size={10}
          style={{
            margin: "0px 10px 0px 0px",
          }}
        >
          <SortBestButton />
          <SortNewButton />
          <SortOldButton />
        </Space>
      </Col>
      <Col flex="auto">
        <SelectTag />
      </Col>
    </Row>
  </Card>
);

export default SortPostCard;
