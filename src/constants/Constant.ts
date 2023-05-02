interface postKeys {
  userId: number;
  postId: number;
}

interface User {
  id: number;
  username: string;
  userDatetime: string;
}

interface Post {
  commentCount: number;
  isDislikeSelected: boolean;
  isLikeSelected: boolean;
  likes: number;
  parentPost: number;
  postContent: string;
  postDatetime: string;
  postId: number;
  postTitle: string;
  tags: string[];
  userId: number;
}

interface ConstantType {
  DEFAULT_USER: User;
  DEFAULT_ALL_POSTS: Post[];
  DEFAULT_ALL_TAGS: string[];
  DEFAULT_CURR_POST: {};
  DEFAULT_CURR_POST_KEYS: postKeys;
  DEFAULT_DELETE_POST_ID: number;
  LOGO_OUTLINE_COLOR: string;
  LOGO_THREAD_COLOR: string;
  LOGO_BULB_COLOR: string;
  LOGO_REFLECTION_COLOR: string;
  WORD_OUTLINE_COLOR: string;
  WORD_FILL_COLOR: string;
}

const Constant: ConstantType = {
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
