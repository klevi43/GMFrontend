import axiosInstance from "./axiosInstance";
import { ADMIN_ENDPOINT, DELETE, USERS_ENDPOINT } from "../constants/endpoints";

export class AdminService {
  getAllUsers = async (pageNo: number) => {
    try {
      const response = await axiosInstance.get(
        ADMIN_ENDPOINT + USERS_ENDPOINT,
        {
          params: { pageNo: pageNo, pageSize: 50 },
        }
      );
      return response;
    } catch (error) {}
  };

  promoteToAdmin = async () => {};

  deleteUser = async (userId: number) => {
    return await axiosInstance.delete(
      ADMIN_ENDPOINT + USERS_ENDPOINT + DELETE,
      {
        params: { userId },
      }
    );
  };
}
const adminService = new AdminService();
export default adminService;
