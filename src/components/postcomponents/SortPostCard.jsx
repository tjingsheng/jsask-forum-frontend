import { FireOutlined, HistoryOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";

const SortPostCard = ({ width, height }) => {
  const buttonWidth = "75px";

  return (
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
            <Button
              icon={<FireOutlined />}
              style={{
                width: buttonWidth,
              }}
            >
              Hot
            </Button>
            <Button
              icon={<StarOutlined />}
              style={{
                width: buttonWidth,
              }}
            >
              New
            </Button>
            <Button
              icon={<HistoryOutlined />}
              style={{
                width: buttonWidth,
              }}
            >
              Old
            </Button>
          </Space>
        </Col>
        <Col flex="auto">
          <Select
            mode="tags"
            placeholder="Sort by Tags"
            style={{
              width: "100%",
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default SortPostCard;
