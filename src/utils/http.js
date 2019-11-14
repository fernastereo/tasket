import axios from "axios";
import { getToken } from "./token";

const BASE_URL = "http://localhost:4000";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    const token = getToken();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
