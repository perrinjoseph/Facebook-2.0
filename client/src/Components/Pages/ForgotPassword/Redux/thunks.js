import Axios from "../../../../axios/Axios";

export const thunkSendEmail = (email) => async (dispatch) => {
  console.log("request is sent");
  let message;
  try {
    const response = await Axios.post("/auth/forgotPassword", {
      email,
    });
    console.log(
      "send email link thunk response",
      response,
      "data",
      response.data
    );
  } catch (error) {
    message = error.response.data.message;
  }
  return message;
};
