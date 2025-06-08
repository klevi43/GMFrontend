import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type UserDto from "../../dtos/userDto";
import type { RegisterInput } from "../../types/inputTypes";
import userService from "../../services/userService";
import axios from "axios";
import { useMod } from "../useMod";

export const useUpdateUserInfo = (
  options?: UseMutationOptions<UserDto, unknown, RegisterInput, unknown>
): UseBaseMutationResult<UserDto, unknown, RegisterInput, unknown> => {
  const queryClient = useQueryClient();
  const { closeModal } = useMod();
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
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      closeModal();
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
