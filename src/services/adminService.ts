import axiosInstance from "./axiosInstance";
import { ADMIN_ENDPOINT, DELETE, USERS_ENDPOINT } from "../constants/endpoints";
import type UserDto from "../dtos/userDto";

export class AdminService {
  getAllUsers = async (pageNo: number) => {
    try {
      const response = await axiosInstance.get(ADMIN_ENDPOINT, {
        params: { pageNo: pageNo, pageSize: 50 },
      });
      return response;
    } catch (error) {}
  };

  promoteToAdmin = async (userId: number): Promise<UserDto> => {
    return await axiosInstance.put(
      ADMIN_ENDPOINT + "/promote",
      {},
      {
        params: { userId: userId },
      }
    );
  };

  demoteToUser = async (userId: number): Promise<UserDto> => {
    return await axiosInstance.put(
      ADMIN_ENDPOINT + "/demote",
      {},
      {
        params: { userId: userId },
      }
    );
  };

  deleteUser = async (userId: number) => {
    return await axiosInstance.delete(ADMIN_ENDPOINT + DELETE, {
      params: { userId },
    });
  };
}
const adminService = new AdminService();
export default adminService;
