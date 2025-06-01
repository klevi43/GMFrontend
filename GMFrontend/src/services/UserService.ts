import axiosInstance from "./axiosInstance";
import { REGISTER_ENDPOINT } from "../constants/constants";
import type RegisterUser from "../types/registerUserType";
export class UserService {
  register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const newUser: RegisterUser = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      const response = await axiosInstance.post(
        REGISTER_ENDPOINT,

        JSON.stringify(newUser),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (error: any) {}
  };
}

const userService = new UserService();
export default userService;
