import {
  useMutation,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { RegisterInput } from "../types/inputTypes";
import userService from "../services/userService";
import axios from "axios";
import { useNavigate } from "react-router";
import { LOGIN_ENDPOINT } from "../constants/constants";

export const useRegister = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    RegisterInput,
    unknown
  >
): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  RegisterInput,
  unknown
> => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (regiserInput: RegisterInput) => {
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
      navigate(LOGIN_ENDPOINT);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
