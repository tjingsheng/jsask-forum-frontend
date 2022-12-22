const userIdAction = {
  resetId: (data) => ({
    type: "RESET_ID",
    payload: {
      userId: -1,
    },
  }),
  setId: (data) => ({
    type: "SET_ID",
    payload: {
      userId: data,
    },
  }),
};

export default userIdAction;
