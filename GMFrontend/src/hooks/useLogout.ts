import {
  queryOptions,
  useMutation,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { useNavigate } from "react-router";
import authService from "../services/authService";
import axios, { type AxiosResponse } from "axios";

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
      localStorage.removeItem("authUser");
      navigate("/");
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
