import { FireOutlined, HistoryOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React from "react";

const SortNewButton = () => {
  return (
    <Button
      icon={<StarOutlined />}
      style={{
        width: "75px",
        margin: "10px 0px 10px 10px",
      }}
    >
      New
    </Button>
  );
};

const SortOldButton = () => {
  return (
    <Button
      icon={<HistoryOutlined />}
      style={{
        width: "75px",
        margin: "10px 0px 10px 10px",
      }}
    >
      Old
    </Button>
  );
};

const SortBestButton = () => {
  return (
    <Button
      icon={<FireOutlined />}
      style={{
        width: "75px",
        margin: "10px 0px 10px 10px",
      }}
    >
      Hot
    </Button>
  );
};

const SortPostCard = ({ width, height }) => {
  return (
    <Card
      style={{
        size: "small",
        margin: "10px auto",
        height: height,
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <Row align="middle">
        <Col>
          <SortBestButton />
        </Col>
        <Col>
          <SortNewButton />
        </Col>
        <Col>
          <SortOldButton />
        </Col>
      </Row>
    </Card>
  );
};

export default SortPostCard;
