const Constant = {
  //USER DEFAULT VALUES
  DEFAULT_USER: {
    id: -1,
    username: "",
    userDatetime: "2000-01-01 00:00:00+00",
  },

  // POST DEFAULT VALUES
  DEFAULT_ALL_POSTS: [],
  DEFAULT_ALL_TAGS: [],
  DEFAULT_CURR_POST: {},
  DEFAULT_CURR_POST_KEYS: {
    userId: -1,
    postId: -1,
  },
  DEFAULT_NEW_POST: {
    userId: -1,
    postTitle: "",
    postContent: "",
    parentPost: 0,
  },
  DEFAULT_DELETE_POST_ID: -1,

  //DEFAULT COLORS
  LOGO_OUTLINE_COLOR: "black",
  LOGO_THREAD_COLOR: "grey",
  LOGO_BULB_COLOR: "yellow",
  LOGO_REFLECTION_COLOR: "white",

  WORD_OUTLINE_COLOR: "#6071a4",
  WORD_FILL_COLOR: "#93DBE9",
};

export default Constant;
