import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Col, Row, Space, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Messages, Route } from "../../constants";
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
            <Tooltip title={Messages.TOOLTIP_UNLIKE}>
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
            </Tooltip>
          ) : (
            <Tooltip title={Messages.TOOLTIP_LIKE}>
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
            </Tooltip>
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
            <Tooltip title={Messages.TOOLTIP_UNDISLIKE}>
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
            </Tooltip>
          ) : (
            <Tooltip title={Messages.TOOLTIP_DISLIKE}>
              <DislikeOutlined
                onClick={() => {
                  setLike(false);
                  setDislike(true);
                  dispatch(postPreferenceAction.putPostPreference(dislikePayload));
                }}
                style={{
                  fontSize: footerHeight,
                }}
              />
            </Tooltip>
          )}
          {isCommentButtonVisible && (
            <>
              <Tooltip title={Messages.TOOLTIP_VIEW_COMMENTS}>
                <MessageOutlined
                  onClick={() => goto(`${Route.post}/?postId=${postId}`)}
                  style={{
                    fontSize: footerHeight,
                  }}
                />
              </Tooltip>
              <Title
                level={5}
                style={{
                  margin: "0px",
                }}
              >
                {commentCount} Comments
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
