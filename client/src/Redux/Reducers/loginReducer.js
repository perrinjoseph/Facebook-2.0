const initialValue = {};
const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        username: action.payload.username,
        email: action.payload.email,
        _id: action.payload._id,
      };
    case "LOGOUT_USER":
      return {
        username: "",
        email: "",
        _id: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
