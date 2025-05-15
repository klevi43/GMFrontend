import axiosInstance from "./axiosInstance";
import { REGISTER_ENDPOINT } from "../constants/constants";
export class UserService {
  register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const response = await axiosInstance.post(
        REGISTER_ENDPOINT,
        JSON.stringify({ email, password, confirmPassword }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (error) {
      console.log(error);
    }
  };
}
