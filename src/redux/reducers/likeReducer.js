const InitialState = {
  like: false,
  dislike: false,
};

const likeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        like: true,
        dislike: false,
      };
    case "DISLIKE":
      return {
        ...state,
        like: false,
        dislike: true,
      };
    case "RESET":
      return {
        ...state,
        like: false,
        dislike: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default likeReducer;
