import { Card, Row, Tag, Typography } from "antd";
import React from "react";
import PostFooter from "./PostFooter";

const { Title, Paragraph } = Typography;

const PostCard = ({
  width,
  isCommentButtonVisible,

  postTitle,
  tags,
  postContent,

  ...props
}) => (
  <Card
    style={{
      margin: "10px auto",
      width: width,
    }}
    bodyStyle={{
      padding: "0",
    }}
  >
    <Row>
      <PostTitle postTitle={postTitle} />
    </Row>
    <Row>
      <PostTags tags={tags} />
    </Row>
    <Row>
      <PostContent postContent={postContent} />
    </Row>
    <Row>
      <PostFooter isCommentButtonVisible={isCommentButtonVisible} {...props} />
    </Row>
  </Card>
);

const PostTitle = ({ postTitle }) => (
  <Title
    level={3}
    style={{
      margin: "0px",
      padding: "10px",
    }}
  >
    {postTitle}
  </Title>
);

const PostTags = ({ tags }) => (
  <div style={{ padding: "0px 10px" }}>
    {tags.map((tag, idx) => (
      <Tag key={idx}>{tag}</Tag>
    ))}
  </div>
);

const PostContent = ({ postContent }) => (
  <Paragraph
    style={{
      margin: "0px",
      padding: "10px",
    }}
  >
    {postContent}
  </Paragraph>
);

export default PostCard;
