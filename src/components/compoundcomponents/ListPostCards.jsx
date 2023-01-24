import React from "react";
import { Messages } from "../../constants";

import hasCommonElements, { isEmptyArray } from "../../utils";
import sortKeyEnums from "../../utils/enums.js";
import NoContentCard from "../cards/NoContentCard";
import PostCard from "../cards/PostCard";

const ListPostCards = ({
  width,
  currUserId,
  allPosts,
  sortKey,
  filterByTagsArray,
  setFilterByTagsArray,
  isAllPostsFetched,
}) => {
  const sortComparators = {
    [sortKeyEnums.hot]: (a, b) => b.likes - a.likes,
    [sortKeyEnums.rising]: (a, b) => b.commentCount - a.commentCount,
    [sortKeyEnums.new]: (a, b) => new Date(b.postDatetime).getTime() - new Date(a.postDatetime).getTime(),
    [sortKeyEnums.old]: (a, b) => new Date(a.postDatetime).getTime() - new Date(b.postDatetime).getTime(),
  };

  return (
    <>
      {isAllPostsFetched &&
        (isEmptyArray(allPosts) ? (
          <NoContentCard width={width} message={Messages.NO_POSTS} />
        ) : (
          allPosts
            .filter((post) => (filterByTagsArray.length > 0 ? hasCommonElements(post.tags, filterByTagsArray) : true))
            .sort(sortComparators[sortKey])
            .map((post, idx) => (
              <PostCard
                hoverable
                key={idx}
                width={width}
                isCommentButtonVisible={true}
                currUserId={currUserId}
                setFilterByTagsArray={setFilterByTagsArray}
                filterByTagsArray={filterByTagsArray}
                {...post}
              />
            ))
        ))}
    </>
  );
};

export default ListPostCards;
