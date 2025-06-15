import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useMod } from "../useMod";
import userService from "../../services/userService";
import axios from "axios";
import { useNavigate } from "react-router";
import { formatApiError } from "../../utils/formatApiError";

export const useDeleteUser = (
  options?: UseMutationOptions<AxiosResponse<any, any>, unknown, void, unknown>
): UseBaseMutationResult<AxiosResponse<any, any>, unknown, void, unknown> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      try {
        return await userService.deleteUser();
      } catch (error) {
        let message = "Unable to delete your account. Please try again later";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response?.data?.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      navigate("/");
      queryClient.removeQueries({ queryKey: ["userInfo"] });
      queryClient.removeQueries({ queryKey: ["authUser"] });
      queryClient.removeQueries({ queryKey: ["users"] });

      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
