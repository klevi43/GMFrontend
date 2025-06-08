import axiosInstance from "./axiosInstance";
import { ADMIN_ENDPOINT, DELETE } from "../constants/endpoints";

export class AdminService {
  getAllUsers = async (pageNo: number) => {
    const response = await axiosInstance.get(ADMIN_ENDPOINT + "/users", {
      params: { pageNo: pageNo, pageSize: 50 },
    });
    return response;
  };

  promoteToAdmin = async () => {};

  deleteUser = async (userId: number) => {
    return await axiosInstance.delete(ADMIN_ENDPOINT + DELETE, {
      params: { userId },
    });
  };
}
const adminService = new AdminService();
export default adminService;
