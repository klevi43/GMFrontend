import { useQuery, useQueryClient } from "@tanstack/react-query";
import type AuthUserDto from "../dtos/authUserDto";
import authService from "../services/authService";
import axios from "axios";

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
