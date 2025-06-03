import axiosInstance from "./axiosInstance";
import { REGISTER_ENDPOINT } from "../constants/constants";
import type RegisterUser from "../types/registerUserType";
import type { RegisterInput } from "../types/inputTypes";
import { UPDATE, USERS_ENDPOINT } from "../constants/endpoints";
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
  getUserInfo = async () => {
    const response = await axiosInstance.get(USERS_ENDPOINT);
    return response.data;
  };
  updateUserInfo = async (registerInput: RegisterInput) => {
    const response = await axiosInstance.put(
      USERS_ENDPOINT + UPDATE,
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
