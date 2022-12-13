import {
  DislikeOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const PostFooter = ({
  username = "Unknown User",
  datetime = "",
  commentCount = "Unknown",
  isCommentButtonVisible = true,
}) => {
  const footerHeight = "30px";
  return (
    <Row
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
          {isCommentButtonVisible && (
            <>
              <MessageOutlined
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
                {commentCount} Comments
                {/* create plural component */}
              </Title>
            </>
          )}
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
          {`Posted by ${username} ${datetime}`}
        </Title>
      </Col>
    </Row>
  );
};

export default PostFooter;
