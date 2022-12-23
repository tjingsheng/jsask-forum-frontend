import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { differenceCalculator } from "../../utils";

const { Title } = Typography;

const PostFooter = ({
  postId = -1,
  isLikeSelected = false,
  likes = -1,
  isDislikeSelected = false,
  commentCount = "Unknown",
  username = "Unknown User",
  datetime = "",
  isCommentButtonVisible = true,
}) => {
  const footerHeight = "30px";
  const goto = useNavigate();
  const [like, setLike] = useState(isLikeSelected);
  const [dislike, setDislike] = useState(isDislikeSelected);

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
          {like ? (
            <LikeFilled
              onClick={() => {
                setLike(false);
              }}
              style={{
                color: "green",
                fontSize: footerHeight,
              }}
            />
          ) : (
            <LikeOutlined
              onClick={() => {
                setLike(true);
                setDislike(false);
              }}
              style={{
                fontSize: footerHeight,
              }}
            />
          )}
          <Title
            level={5}
            style={{
              margin: "0px",
              textAlign: "center",
              minWidth: footerHeight,
            }}
          >
            {likes + differenceCalculator(like, dislike)}
          </Title>
          {dislike ? (
            <DislikeFilled
              onClick={() => {
                setDislike(false);
              }}
              style={{
                color: "red",
                fontSize: footerHeight,
              }}
            />
          ) : (
            <DislikeOutlined
              onClick={() => {
                setLike(false);
                setDislike(true);
              }}
              style={{
                fontSize: footerHeight,
              }}
            />
          )}
          {isCommentButtonVisible && (
            <>
              <MessageOutlined
                onClick={() => goto(`/post/?postId=${postId}`)}
                style={{
                  fontSize: footerHeight,
                }}
              />
              <Title
                onClick={() => goto(`/post/?postId=${postId}`)}
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
