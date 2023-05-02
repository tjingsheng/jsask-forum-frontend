interface MessagesType {
  FOOTER_MESSAGE: string;

  INVALID_CREDENTIALS_TITLE: string;
  INVALID_CREDENTIALS_DESCRIPTION: string;

  INVALID_USERNAME_TITLE: string;
  INVALID_USERNAME_DESCRIPTION: string;

  NO_POSTS: string;
  NO_COMMENTS: string;

  DELETE_POST_CONFIRMATION: string;
  LOGOUT_CONFIRMATION: string;
  DELETE_COMMENT_CONFIRMATION: string;

  YES_BUTTON: string;
  NO_BUTTON: string;

  HOT_BUTTON: string;
  RISING_BUTTON: string;
  NEW_BUTTON: string;
  OLD_BUTTON: string;

  LOGIN_BUTTON: string;
  SIGNUP_BUTTON: string;
  CREATE_BUTTON: string;

  NO_CONTENT: string;

  TOOLTIP_LIKE: string;
  TOOLTIP_DISLIKE: string;
  TOOLTIP_UNLIKE: string;
  TOOLTIP_UNDISLIKE: string;

  TOOLTIP_EDIT: string;
  TOOLTIP_DELETE: string;
  TOOLTIP_VIEW_COMMENTS: string;
  TOOLTIP_FILTER_BY_TAG: string;
  TOOLTIP_HOT: string;
  TOOLTIP_RISING: string;
  TOOLTIP_NEW: string;
  TOOLTIP_OLD: string;
}

const Messages: MessagesType = {
  FOOTER_MESSAGE: "Jsask © 2022 Created by Tan Jing Sheng",

  INVALID_CREDENTIALS_TITLE: "Invalid Credentials",
  INVALID_CREDENTIALS_DESCRIPTION:
    "You have entered an invalid username or password",

  INVALID_USERNAME_TITLE: "Invalid Username",
  INVALID_USERNAME_DESCRIPTION: "The username you entered is in use",

  NO_POSTS: "There are no posts yet.",
  NO_COMMENTS: "There are no comments yet.",

  DELETE_POST_CONFIRMATION:
    "Are you sure you want to delete your post? This action is irreversible.",
  LOGOUT_CONFIRMATION: "  Are you sure you want to logout?",
  DELETE_COMMENT_CONFIRMATION:
    "Are you sure you want to delete your comment? This action is irreversible.",

  YES_BUTTON: "Yes",
  NO_BUTTON: "No",

  HOT_BUTTON: "Hot",
  RISING_BUTTON: "Rising",
  NEW_BUTTON: "New",
  OLD_BUTTON: "Old",

  LOGIN_BUTTON: "Login",
  SIGNUP_BUTTON: "Sign Up",
  CREATE_BUTTON: "Create",

  NO_CONTENT: "No Content Found",

  TOOLTIP_LIKE: "Like",
  TOOLTIP_DISLIKE: "Dislike",
  TOOLTIP_UNLIKE: "Unlike",
  TOOLTIP_UNDISLIKE: "Undislike",

  TOOLTIP_EDIT: "Edit",
  TOOLTIP_DELETE: "Delete",
  TOOLTIP_VIEW_COMMENTS: "View Comments",
  TOOLTIP_FILTER_BY_TAG: "Add tag to filter",
  TOOLTIP_HOT: "Sort by Likes",
  TOOLTIP_RISING: "Sort by Comments",
  TOOLTIP_NEW: "Sort by Newest",
  TOOLTIP_OLD: "Sort by Oldest",
};

export default Messages;
