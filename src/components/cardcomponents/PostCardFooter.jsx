import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Col, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postPreferenceAction } from "../../redux/actions";
import { differenceCalculator, formatDatetime } from "../../utils";

const { Title } = Typography;

const PostCardFooter = ({
  postId = -1,
  isLikeSelected = false,
  likes = -1,
  isDislikeSelected = false,
  commentCount = "Unknown",
  username = "Unknown User",
  postDatetime = "",
  isCommentButtonVisible = true,
  currUserId = -1,
}) => {
  const footerHeight = "30px";
  const dispatch = useDispatch();
  const goto = useNavigate();
  const [like, setLike] = useState(isLikeSelected);
  const [dislike, setDislike] = useState(isDislikeSelected);
  useEffect(() => {
    setLike(isLikeSelected);
    setDislike(isDislikeSelected);
  }, [postId]);

  const likePayload = {
    currUserId: currUserId,
    currPostId: postId,
    currPreference: 1,
  };

  const dislikePayload = {
    currUserId: currUserId,
    currPostId: postId,
    currPreference: 2,
  };

  const resetPayload = {
    currUserId: currUserId,
    currPostId: postId,
    currPreference: 3,
  };

  const FormattedPostDatetime = formatDatetime(postDatetime);
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
                dispatch(postPreferenceAction.putPostPreference(resetPayload));
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
                dispatch(postPreferenceAction.putPostPreference(likePayload));
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
              minWidth: footerHeight,
              textAlign: "center",
            }}
          >
            {likes + differenceCalculator(like, dislike)}
          </Title>
          {dislike ? (
            <DislikeFilled
              onClick={() => {
                setDislike(false);
                dispatch(postPreferenceAction.putPostPreference(resetPayload));
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
                dispatch(
                  postPreferenceAction.putPostPreference(dislikePayload)
                );
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
          {`${username} | ${FormattedPostDatetime}`}
        </Title>
      </Col>
    </Row>
  );
};

export default PostCardFooter;
