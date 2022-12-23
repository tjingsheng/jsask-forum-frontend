const InitialState = {
  userId: -1,
  username: "",
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "RESET_USER_ID":
      return {
        ...state,
        userId: action.payload.userId,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload.userId,
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload.username,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
