export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};

export const logoutUser = (user) => {
  return {
    type: "LOGOUT_USER",
  };
};
