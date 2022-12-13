import {
  FireOutlined,
  HistoryOutlined,
  RiseOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SortPostCard = ({ width, height }) => {
  const buttonWidth = "100px";
  const goto = useNavigate();
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
              onClick={() => goto(`/home/?sort=hot`)}
              style={{
                width: buttonWidth,
              }}
            >
              Hot
            </Button>
            <Button
              icon={<RiseOutlined />}
              onClick={() => goto(`/home/?sort=rising`)}
              style={{
                width: buttonWidth,
              }}
            >
              Rising
            </Button>
            <Button
              icon={<StarOutlined />}
              onClick={() => goto(`/home/?sort=new`)}
              style={{
                width: buttonWidth,
              }}
            >
              New
            </Button>
            <Button
              icon={<HistoryOutlined />}
              onClick={() => goto(`/home/?sort=old`)}
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
