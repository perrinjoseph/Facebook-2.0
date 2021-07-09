import Axios from "../../../../axios/Axios";

export const thunkResetPassword = (newpassword, resetToken) => async (
  dispatch
) => {
  let message;
  try {
    const res = await Axios.put(`/auth/resetPassword/${resetToken}`, {
      password: newpassword,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
    message = error.response?.data?.message;
  }
  return message;
};
