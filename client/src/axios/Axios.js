import axios from "axios";

const Axios = axios;
Axios.defaults.baseURL = "http://localhost:5000/api/";
export default Axios;
