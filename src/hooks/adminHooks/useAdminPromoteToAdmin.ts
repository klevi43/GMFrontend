import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type UserDto from "../../dtos/userDto";
import adminService from "../../services/adminService";
import axios from "axios";
import { formatApiError } from "../../utils/formatApiError";
import { useMod } from "../useMod";

export const useAdminPromoteToAdmin = (
  options?: UseMutationOptions<UserDto, unknown, number, unknown>
): UseBaseMutationResult<UserDto, unknown, number, unknown> => {
  const { closeModal } = useMod();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: number) => {
      try {
        return await adminService.promoteToAdmin(userId);
      } catch (error) {
        let message =
          "Unable to promote user to admin. please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response.data.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
