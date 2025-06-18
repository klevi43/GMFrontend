import {
  useMutation,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { useNavigate } from "react-router";
import { LOGIN_ENDPOINT } from "../constants/endpoints";
import userService from "../services/userService";
import type { UserCredentialsInput } from "../types/inputTypes";

export const useRegister = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    UserCredentialsInput,
    unknown
  >
): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  UserCredentialsInput,
  unknown
> => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (regiserInput: UserCredentialsInput) => {
      try {
        return await userService.register(regiserInput);
      } catch (error) {
        let message = "Unable to register account. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      setTimeout(() => navigate(LOGIN_ENDPOINT), 3000);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
