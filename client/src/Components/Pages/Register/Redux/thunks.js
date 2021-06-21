import Axios from "../../../../axios/Axios";
const registerUser = async (username, email, password) => async (dispatch) => {
  if ((username, email, password)) {
    try {
      const response = await Axios.post("/register", {
        username,
        password,
        email,
      });
    } catch (err) {
      return err.reponse.data.error;
    }
  }
};
