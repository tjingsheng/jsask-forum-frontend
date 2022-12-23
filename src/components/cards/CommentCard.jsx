import { Card } from "antd";
import React from "react";
import CommentCardContent from "../cardcomponents/CommentCardContent";
import CommentCardHeader from "../cardcomponents/CommentCardHeader";
import PostCardFooter from "../cardcomponents/PostCardFooter";

const CommentCard = ({ width, ...props }) => (
  <>
    <Card
      style={{
        margin: "10px auto",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <CommentCardHeader {...props} />
      <CommentCardContent {...props} />
      <PostCardFooter isCommentButtonVisible={false} {...props} />
    </Card>
  </>
);

export default CommentCard;
