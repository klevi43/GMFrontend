import axios from "axios";
import { API_URL, LOGIN_ENDPOINT } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Global response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = LOGIN_ENDPOINT;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
