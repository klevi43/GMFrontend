import axios from "axios";
import axiosInstance from "./axiosInstance";
import { LOGIN_ENDPOINT } from "../constants/constants";

import type { LoginInput } from "../types/inputTypes";
class AuthService {
  constructor() {}
  login = async (loginInput: LoginInput) => {
    const response = await axiosInstance.post(LOGIN_ENDPOINT, loginInput, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  logout = async () => {
    try {
      const response = await axiosInstance.post(
        "/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}
const authService = new AuthService();
export default authService;
