import axiosInstance from "./axiosInstance";
import { REGISTER_ENDPOINT } from "../constants/constants";
import type RegisterUser from "../types/registerUserType";
import type { RegisterInput } from "../types/inputTypes";
export class UserService {
  register = async (registerInput: RegisterInput) => {
    const response = await axiosInstance.post(
      REGISTER_ENDPOINT,
      registerInput,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
}

const userService = new UserService();
export default userService;
