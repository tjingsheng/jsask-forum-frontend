import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Messages, Route } from "../../constants";
import { postAction } from "../../redux/actions";
import PostCardContent from "../cardcomponents/PostCardContent";
import PostCardFooter from "../cardcomponents/PostCardFooter";
import PostCardHeader from "../cardcomponents/PostCardHeader";
import PostCardTags from "../cardcomponents/PostCardTags";
import ManagePostForm from "../forms/ManagePostForm";

const PostCard = ({
  hoverable = false,
  width,
  isCommentButtonVisible,

  postTitle,
  tags,
  postContent,

  isCreator,
  currUserId,

  postId,
  ...props
}) => {
  const [isEditPostModalVisible, setIsEditPostModalVisible] = useState(false);
  const [isDeletePostModalVisible, setIsDeletePostModalVisible] =
    useState(false);
  const goto = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Card
        onClick={(e) =>
          !["svg", "path"].includes(e.target.nodeName) &&
          goto(`${Route.post}/?postId=${postId}`)
        }
        hoverable={hoverable}
        style={{
          margin: "10px auto",
          width: width,
        }}
        bodyStyle={{
          padding: "0",
        }}
      >
        <PostCardHeader postTitle={postTitle} />
        {isCreator && (
          <Tooltip title={Messages.TOOLTIP_DELETE_POST}>
            <DeleteOutlined
              onClick={() => setIsDeletePostModalVisible(true)}
              style={{
                display: "inline-block",
                float: "right",
                fontSize: "25px",
                marginTop: "10px",
                marginRight: "10px",
              }}
            />
          </Tooltip>
        )}
        {isCreator && (
          <Tooltip title={Messages.TOOLTIP_EDIT_POST}>
            <EditOutlined
              onClick={() => setIsEditPostModalVisible(true)}
              style={{
                display: "inline-block",
                float: "right",
                fontSize: "25px",
                marginTop: "10px",
                marginRight: "10px",
              }}
            />
          </Tooltip>
        )}
        <PostCardTags tags={tags} />
        <PostCardContent postContent={postContent} />
        <PostCardFooter
          isCommentButtonVisible={isCommentButtonVisible}
          postId={postId}
          currUserId={currUserId}
          {...props}
        />
      </Card>

      <Modal
        title="Edit Post"
        open={isEditPostModalVisible}
        onCancel={() => setIsEditPostModalVisible(false)}
        footer={[]}
      >
        <ManagePostForm
          submitButtonText="Edit"
          onFinishForm={(values) => {
            setIsEditPostModalVisible(false);
            dispatch(
              postAction.updatePost({
                postId: postId,
                postTitle: values.postTitle,
                postContent: values.postContent,
                tags: values.tags,
              })
            );
          }}
          postTitle={postTitle}
          tags={tags}
          postContent={postContent}
        />
      </Modal>

      <Modal
        title="Delete Post Confirmation"
        open={isDeletePostModalVisible}
        onCancel={() => setIsDeletePostModalVisible(false)}
        footer={[
          <Button
            key="Yes"
            onClick={() => {
              setIsDeletePostModalVisible(false);
              dispatch(postAction.deletePost(postId));
              goto("/");
            }}
          >
            {Messages.YES_BUTTON}
          </Button>,
          <Button key="No" onClick={() => setIsDeletePostModalVisible(false)}>
            {Messages.NO_BUTTON}
          </Button>,
        ]}
      >
        {Messages.DELETE_POST_CONFIRMATION}
      </Modal>
    </>
  );
};

export default PostCard;
