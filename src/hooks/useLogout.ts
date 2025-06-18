import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import authService from "../services/authService";

export const useLogout = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    unknown,
    unknown
  >
): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  unknown,
  unknown
> => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      try {
        return await authService.logout();
      } catch (error) {
        let message = "Unable to logout. Please try again";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(["authUser"], null);
      navigate("/");
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
