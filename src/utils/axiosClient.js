import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://tinder-clone-rest-api.herokuapp.com/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
