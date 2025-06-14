import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { EmailInput } from "../../types/inputTypes";
import { useNavigate } from "react-router";
import userService from "../../services/userService";
import axios from "axios";
import { formatApiError } from "../../utils/formatApiError";
import { LOGIN_ENDPOINT } from "../../constants/constants";

export const useUpdateUserEmail = (
  options?: UseMutationOptions<void, unknown, EmailInput, unknown>
): UseBaseMutationResult<void, unknown, EmailInput, unknown> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (emailInput: EmailInput) => {
      try {
        await userService.updateUserEmail(emailInput);
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
