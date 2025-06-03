import { useQuery, useQueryClient } from "@tanstack/react-query";
import type AuthUserDto from "../dtos/authUserDto";
import authService from "../services/authService";
import axios from "axios";

export const useLoadAuthUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const data = await authService.getAuthenticatedUser();
      console.log(data);
      return data;
    },
    retry: false,
    staleTime: 60 * 1000 * 300, // 3 hours
  });
};
