const initialValue = {};
const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        username: action.payload.username,
        email: action.payload.email,
        _id: action.payload._id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default loginReducer;
