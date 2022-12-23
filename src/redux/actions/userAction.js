const userAction = {
  resetId: (data) => ({
    type: "RESET_USER_ID",
    payload: {
      userId: -1,
    },
  }),
  setId: (data) => ({
    type: "SET_USER_ID",
    payload: {
      userId: data,
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
