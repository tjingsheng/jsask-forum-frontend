const userAction = {
  resetUserId: (data) => ({
    type: "RESET_USER_ID",
    payload: {
      userId: -1,
    },
  }),
  setUserId: (data) => ({
    type: "SET_USER_ID",
    payload: {
      userId: data,
    },
  }),
  resetUsername: (data) => ({
    type: "RESET_USERNAME",
    payload: {
      username: "",
    },
  }),
  setUsername: (data) => ({
    type: "SET_USERNAME",
    payload: {
      username: data,
    },
  }),
};

export default userAction;
