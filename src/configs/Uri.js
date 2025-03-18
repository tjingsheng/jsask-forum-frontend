const URI = {
  getUser: "/user/{username}/{password}",
  getUserSalt: "/user/{username}",
  postUser: "/user",

  getCurrPost: "/post/{userId}/{postId}",
  getAllPosts: "/post/{userId}",
  postPost: "/post",
  putPost: "/post",
  deletePost: "/post/{postId}",

  getAllTags: "/tags",

  putPostPreference: "/postpreference",
};

export default URI;
