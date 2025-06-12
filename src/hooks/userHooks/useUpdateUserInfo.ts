import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { UserCredentialsInput } from "../../types/inputTypes";
import userService from "../../services/userService";
import axios from "axios";
import { useMod } from "../useMod";
import { formatApiError } from "../../utils/formatApiError";
import type UserDto from "../../dtos/userDto";

export const useUpdateUserInfo = (
  options?: UseMutationOptions<UserDto, unknown, UserCredentialsInput, unknown>
): UseBaseMutationResult<UserDto, unknown, UserCredentialsInput, unknown> => {
  const queryClient = useQueryClient();
  const { closeModal } = useMod();
  return useMutation({
    mutationFn: async (registerInput: UserCredentialsInput) => {
      try {
        return await userService.updateUserInfo(registerInput);
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
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
