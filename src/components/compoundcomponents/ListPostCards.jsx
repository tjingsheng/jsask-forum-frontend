import React from "react";

import hasCommonElements, { isEmptyArray } from "../../utils";
import sortKeyEnums from "../../utils/enums.js";
import NoContentCard from "../cards/NoContentCard";
import PostCard from "../cards/PostCard";

const ListPostCards = ({
  width,
  sortKey,
  allPosts,
  filterByTagsArray,
  currUserId,
  isAllPostsFetched,
}) => {
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) =>
      new Date(b.postDatetime).getTime() - new Date(a.postDatetime).getTime(),
    [sortKeyEnums.old]: (a, b) =>
      new Date(a.postDatetime).getTime() - new Date(b.postDatetime).getTime(),
  };

  return (
    <>
      {isAllPostsFetched &&
        (isEmptyArray(allPosts) ? (
          <NoContentCard width={width} message="There are no posts yet." />
        ) : (
          allPosts
            .filter((post) =>
              filterByTagsArray.length > 0
                ? hasCommonElements(post.tags, filterByTagsArray)
                : true
            )
            .sort(sortComparators[sortKey])
            .map((post, idx) => (
              <PostCard
                hoverable
                key={idx}
                width={width}
                isCommentButtonVisible={true}
                isCreator={currUserId === post.userId}
                currUserId={currUserId}
                {...post}
              />
            ))
        ))}
    </>
  );
};

export default ListPostCards;
