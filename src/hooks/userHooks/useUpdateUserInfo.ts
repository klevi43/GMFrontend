import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { PasswordInput } from "../../types/inputTypes";
import userService from "../../services/userService";
import axios from "axios";
import { formatApiError } from "../../utils/formatApiError";
import type UserDto from "../../dtos/userDto";
import { useNavigate } from "react-router";
import { LOGIN_ENDPOINT } from "../../constants/constants";

export const useUpdateUserPassword = (
  options?: UseMutationOptions<UserDto, unknown, PasswordInput, unknown>
): UseBaseMutationResult<UserDto, unknown, PasswordInput, unknown> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (passwordInput: PasswordInput) => {
      try {
        return await userService.updateUserPassword(passwordInput);
      } catch (error) {
        let message =
          "Unable to update your information. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response.data.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      queryClient.removeQueries({ queryKey: ["authUser"] });
      options?.onSuccess?.(data, variables, context);
      navigate(LOGIN_ENDPOINT);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
