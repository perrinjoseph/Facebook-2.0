const intialValue = false;

const modalReducer = (state = intialValue, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return true;
    case "HIDE_MODAL":
      return false;
    default:
      return state;
  }
};

export default modalReducer;
