import { useQuery } from "@tanstack/react-query";
import type UserDto from "../../dtos/userDto";
import userService from "../../services/userService";

export const useGetUser = () => {
  return useQuery<UserDto>({
    queryKey: ["userInfo"],
    queryFn: async () => await userService.getUserInfo(),
  });
};
