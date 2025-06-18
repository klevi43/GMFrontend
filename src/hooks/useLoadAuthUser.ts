import { useQuery } from "@tanstack/react-query";
import authService from "../services/authService";

export const useLoadAuthUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const data = await authService.getAuthenticatedUser();
      return data;
    },

    retry: false,
    staleTime: 1000 * 60 * 60 * 3, // 3 hours
  });
};
