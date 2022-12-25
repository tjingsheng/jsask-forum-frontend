import {
  FireOutlined,
  HistoryOutlined,
  RiseOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import sortKeyEnums from "../../utils/enums";

function getTagOptions(allTags) {
  const options = [];
  if (allTags !== undefined) {
    allTags.forEach((x) =>
      options.push({ value: x.tagName, label: x.tagName })
    );
  }
  return options;
}

const SortPostCard = ({ width, height, sortKey, handleChange }) => {
  const allTags = useSelector((state) => state.tag.allTags);
  const tagOptions = getTagOptions(allTags);
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
              onClick={() => goto(`/home/?sort=${sortKeyEnums.hot}`)}
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
              onClick={() => goto(`/home/?sort=${sortKeyEnums.rising}`)}
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
              onClick={() => goto(`/home/?sort=${sortKeyEnums.new}`)}
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
              onClick={() => goto(`/home/?sort=${sortKeyEnums.old}`)}
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
            options={tagOptions}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default SortPostCard;
