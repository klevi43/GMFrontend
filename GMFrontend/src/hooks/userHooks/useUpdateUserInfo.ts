import {
  useMutation,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type UserResponseDto from "../../dtos/userResponseDto";
import type { RegisterInput } from "../../types/inputTypes";
import userService from "../../services/userService";
import axios from "axios";

export const useUpdateUserInfo = (
  options?: UseMutationOptions<UserResponseDto, unknown, RegisterInput, unknown>
): UseBaseMutationResult<UserResponseDto, unknown, RegisterInput, unknown> => {
  return useMutation({
    mutationFn: async (registerInput: RegisterInput) => {
      try {
        return await userService.updateUserInfo(registerInput);
      } catch (error) {
        let message =
          "Unable to update your information. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response.data.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
