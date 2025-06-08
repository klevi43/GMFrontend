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

export const useAdminDemoteToUser = (
  options?: UseMutationOptions<UserDto, unknown, number, unknown>
): UseBaseMutationResult<UserDto, unknown, number, unknown> => {
  const { closeModal } = useMod();
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setTimeout(() => closeModal(), 3000);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
