import {
  FireOutlined,
  HistoryOutlined,
  RiseOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "../../constants";
import sortKeyEnums from "../../utils/enums";

const SortPostCard = ({ width, height, sortKey, handleChange, allTags }) => {
  const buttonWidth = "100px";
  const goto = useNavigate();
  const buttonSelectedType = "primary";
  const buttonUnselectedType = "default";

  return (
    <Card
      style={{
        height: height,
        margin: "10px auto",
        padding: "10px",
        size: "small",
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
              type={
                sortKey === sortKeyEnums.hot
                  ? buttonSelectedType
                  : buttonUnselectedType
              }
              onClick={() => goto(`${Route.home}/?sort=${sortKeyEnums.hot}`)}
              style={{
                width: buttonWidth,
              }}
            >
              Hot
            </Button>
            <Button
              icon={<RiseOutlined />}
              type={
                sortKey === sortKeyEnums.rising
                  ? buttonSelectedType
                  : buttonUnselectedType
              }
              onClick={() => goto(`${Route.home}/?sort=${sortKeyEnums.rising}`)}
              style={{
                width: buttonWidth,
              }}
            >
              Rising
            </Button>
            <Button
              icon={<StarOutlined />}
              type={
                sortKey === sortKeyEnums.new
                  ? buttonSelectedType
                  : buttonUnselectedType
              }
              onClick={() => goto(`${Route.home}/?sort=${sortKeyEnums.new}`)}
              style={{
                width: buttonWidth,
              }}
            >
              New
            </Button>
            <Button
              icon={<HistoryOutlined />}
              type={
                sortKey === sortKeyEnums.old
                  ? buttonSelectedType
                  : buttonUnselectedType
              }
              onClick={() => goto(`${Route.home}/?sort=${sortKeyEnums.old}`)}
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
            placeholder="Filter by Tags"
            style={{
              width: "100%",
            }}
            onChange={handleChange}
            options={allTags}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default SortPostCard;
