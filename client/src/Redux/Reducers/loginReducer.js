const initialValue = {};
const loginReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        userName: action.payload.userName,
        firstName: action.payload.firstName,
        lastName: action.pauload.lastName,
      };
    case "LOGOUT_USER":
      return {
        userName: "",
        firstName: "",
        lastName: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
