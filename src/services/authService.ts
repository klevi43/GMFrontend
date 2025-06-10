import { GET_AUTH_USER_ENDPOINT, LOGIN_ENDPOINT } from "../constants/constants";
import axiosInstance from "./axiosInstance";
import type AuthUserDto from "../dtos/authUserDto";
import type { LoginInput } from "../types/inputTypes";
import type { AxiosResponse } from "axios";
import axios from "axios";

class AuthService {
  constructor() {}
  login = async (loginInput: LoginInput): Promise<AuthUserDto> => {
    const response = await axiosInstance.post(LOGIN_ENDPOINT, loginInput, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  logout = async (): Promise<AxiosResponse<any, any>> => {
    const response = await axiosInstance.post("/auth/logout", {});
    return response.data;
  };
  getAuthenticatedUser = async (): Promise<AuthUserDto> => {
    const response = await axiosInstance.get(GET_AUTH_USER_ENDPOINT);
    return response.data;
  };
}
const authService = new AuthService();
export default authService;
