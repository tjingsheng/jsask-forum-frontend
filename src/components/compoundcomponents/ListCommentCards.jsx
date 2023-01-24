import React from "react";
import { Messages } from "../../constants";
import CommentCard from "../cards/CommentCard";
import NoContentCard from "../cards/NoContentCard";

const ListCommentCards = ({ width, currUserId, allComments }) => {
  return (
    <>
      {allComments === null ? (
        <NoContentCard width={width} message={Messages.NO_COMMENTS} />
      ) : (
        Array.isArray(allComments) &&
        allComments
          .sort((a, b) => new Date(a.postDatetime).getTime() - new Date(b.postDatetime).getTime())
          .map((comment, idx) => (
            <CommentCard
              key={idx}
              width={width}
              isCreator={comment.userId === currUserId}
              currUserId={currUserId}
              {...comment}
            />
          ))
      )}
      ;
    </>
  );
};

export default ListCommentCards;
