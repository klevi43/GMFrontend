import { useQuery } from "@tanstack/react-query";
import userService from "../../services/userService";
import type UserResponseDto from "../../dtos/userResponseDto";

export const useGetUser = () => {
  return useQuery<UserResponseDto>({
    queryKey: ["userInfo"],
    queryFn: async () => await userService.getUserInfo(),
  });
};
