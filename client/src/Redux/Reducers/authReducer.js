const initialValue = false;

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "AUTHORIZE":
      return true;
    case "UNAUTHORIZE":
      return false;
    default:
      return state;
  }
};

export default authReducer;
