const likeAction = {
  like: () => ({
    type: "LIKE",
  }),
  dislike: () => ({
    type: "DISLIKE",
  }),
  reset: () => ({
    type: "RESET",
  }),
};

export default likeAction;
