const InitialState = {
  userId: -1,
};

const userIdReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "RESET_ID":
      return {
        ...state,
        userId: action.payload.userId,
      };
    case "SET_ID":
      return {
        ...state,
        userId: action.payload.userId,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userIdReducer;
