import { useQuery } from "@tanstack/react-query";
import adminService from "../../services/adminService";

export const useGetAllUsers = (pageNo: number) => {
  return useQuery({
    queryKey: ["users", pageNo],
    queryFn: () => adminService.getAllUsers(pageNo),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });
};
