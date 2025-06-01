import { LOGIN_ENDPOINT } from "../constants/constants";
import axiosInstance from "./axiosInstance";
import type AuthUserDto from "../dtos/authUserDto";
import type { LoginInput } from "../types/inputTypes";

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
