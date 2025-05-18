import axiosInstance from "./axiosInstance";
import { REGISTER_ENDPOINT } from "../constants/constants";
import type { ServerError } from "../types/serverErrorContextType";
import type RegisterUser from "../types/registerUserType";
export class UserService {
  register = async (
    email: string,
    password: string,
    confirmPassword: string,
    setServerError: React.Dispatch<React.SetStateAction<ServerError>>
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
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (error: any) {
      const serverError: ServerError = {
        status: error.response.data.status,
        msg: error.response.data.message,
        timestamp: error.response.data.timestamp,
      };

      setServerError(serverError);
    }
  };
}

const userService = new UserService();
export default userService;
