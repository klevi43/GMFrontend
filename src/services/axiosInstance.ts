import axios from "axios";
import { API_URL, LOGIN_ENDPOINT } from "../constants/constants";
import { NOT_FOUND_ENDPOINT } from "../constants/endpoints";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default axiosInstance;
