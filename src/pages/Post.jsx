import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentCard from "../components/cards/CommentCard";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import HomeLayout from "../layouts/HomeLayout";

const PostPage = () => <HomeLayout content={<PostPageContent />} />;

function getAllComments(target) {
  let result = { post: { tags: [] }, comments: [] };
  if (target !== undefined) {
    return target;
  }
  return result;
}

const PostPageContent = () => {
  const allComments = useSelector((state) => state.post.allComments);
  const { post, comments } = getAllComments(allComments);
  //FOR TESTING --->
  const [queryParams] = useSearchParams(window.location.search);
  const TEST = queryParams.get("postID"); //FOR TESTING
  // <--- FOR TESTING

  const PageWidth = "50%";
  return (
    <>
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
      {/* FOR TESTING ---> */}
      <div
        style={{
          textAlign: "center",
        }}
      >
        This is the value of postID taken from the URL is: {TEST}
      </div>
      {/* <--- FOR TESTING */}
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="What are your thoughts?"
        buttonText="Comment"
        isPost={false}
      />
      {comments.map((comment, idx) => (
        <CommentCard key={idx} width={PageWidth} {...comment} />
      ))}
    </>
  );
};

export default PostPage;
