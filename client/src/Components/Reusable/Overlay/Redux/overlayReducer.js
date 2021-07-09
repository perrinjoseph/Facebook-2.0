const initialValue = false;
const overlayReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SHOW_OVERLAY":
      return true;
    case "HIDE_OVERLAY":
      return false;
    default:
      return state;
  }
};
export default overlayReducer;
