import { useQuery } from "@tanstack/react-query";
import userService from "../../services/userService";
import type UserDto from "../../dtos/userDto";

export const useGetUser = () => {
  return useQuery<UserDto>({
    queryKey: ["userInfo"],
    queryFn: async () => await userService.getUserInfo(),
  });
};
