import axios from "axios";
import dotenvConfig from "./dotenvConfig";

export default axios.create({
  baseURL: dotenvConfig.BACKEND_URL,
  withCredentials: true,
});
