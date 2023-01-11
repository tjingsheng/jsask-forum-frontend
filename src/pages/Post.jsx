import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentCard from "../components/cards/CommentCard";
import CreatePostCard from "../components/cards/CreatePostCard";
import PostCard from "../components/cards/PostCard";
import HomeLayout from "../layouts/HomeLayout";
import { postAction } from "../redux/actions";

const PostPage = () => <HomeLayout content={<PostPageContent />} />;

const PostPageContent = () => {
  const getCurrPost = (CurrPost) => {
    let result = { post: { tags: [] }, comments: [] };
    if (CurrPost !== undefined) {
      return CurrPost;
    }
    return result;
  };

  const dispatch = useDispatch();
  const currUserId = useSelector((state) => state.authentication.user.id);
  const [queryParams] = useSearchParams(window.location.search);
  const postId = queryParams.get("postId");
  const initialPost = useSelector((state) => state.post.currPost);
  const [currPost, setCurrPost] = useState(initialPost);
  const { post, comments } = getCurrPost(currPost);

  useEffect(() => {
    dispatch(postAction.fetchCurrPost({ userId: currUserId, postId: postId }));
  }, []);

  const PageWidth = "50%";
  return (
    <>
      <PostCard width={PageWidth} isCommentButtonVisible={false} {...post} />
      <CreatePostCard
        width={PageWidth}
        inputPlaceholder="What are your thoughts?"
        buttonText="Comment"
        isPost={false}
      />
      {Array.isArray(comments) &&
        comments.map((comment, idx) => (
          <CommentCard key={idx} width={PageWidth} {...comment} />
        ))}
    </>
  );
};

export default PostPage;
