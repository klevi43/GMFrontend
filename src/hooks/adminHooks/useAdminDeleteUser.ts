import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import axios from "axios";
import adminService from "../../services/adminService";
import { formatApiError } from "../../utils/formatApiError";

export const useAdminDeleteUser = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    number,
    unknown
  >
): UseBaseMutationResult<AxiosResponse<any, any>, unknown, number, unknown> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: number) => {
      try {
        return await adminService.deleteUser(userId);
      } catch (error) {
        let message = "Unable to delete user. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response?.data?.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
