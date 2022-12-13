import { FireOutlined, HistoryOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";

const SortPostCard = ({ width, height }) => {
  const [queryParams] = useSearchParams(window.location.search); //FOR TESTING
  const TEST = queryParams.get("sort"); //FOR TESTING
  const buttonWidth = "75px";

  return (
    <>
      {/* FOR TESTING ---> */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        This is the value of postId taken from the URL is: {TEST}
      </div>
      {/* <--- FOR TESTING */}
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
    </>
  );
};

export default SortPostCard;
