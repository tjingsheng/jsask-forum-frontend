import { Button, Card, Col, Row } from "antd";
import React from "react";

const SortNewButton = () => {
  return (
    <Button
      style={{
        width: "75px",
        margin: "10px 0px 10px 10px",
      }}
    >
      New
    </Button>
  );
};

const SortBestButton = () => {
  return (
    <Button
      style={{
        width: "75px",
        margin: "10px 0px 10px 10px",
      }}
    >
      Hot
    </Button>
  );
};

const SortingCard = ({ width, height }) => {
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
      </Row>
    </Card>
  );
};

export default SortingCard;
