import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type UserDto from "../../dtos/userDto";
import { useMod } from "../useMod";
import adminService from "../../services/adminService";
import { formatApiError } from "../../utils/formatApiError";
import axios from "axios";
import { useLoadAuthUser } from "../useLoadAuthUser";
import { Navigate, useNavigate } from "react-router";

export const useAdminDemoteToUser = (
  options?: UseMutationOptions<UserDto, unknown, number, unknown>
): UseBaseMutationResult<UserDto, unknown, number, unknown> => {
  const { closeModal } = useMod();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userDto = useLoadAuthUser();
  return useMutation({
    mutationFn: async (userId: number) => {
      try {
        return await adminService.demoteToUser(userId);
      } catch (error) {
        let message = "Unable to demote user to admin. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response.data.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
