import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-1be2f.firebaseio.com/",
});

export default instance;
