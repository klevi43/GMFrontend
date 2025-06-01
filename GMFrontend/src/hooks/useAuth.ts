import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import axios from "axios";
import authService from "../services/authService";
import type { LoginInput } from "../types/inputTypes";
import { useNavigate } from "react-router";
import { WORKOUTS_ENDPOINT } from "../constants/endpoints";
export const useAuth = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  LoginInput,
  unknown
> => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (loginInput: LoginInput) => {
      try {
        return await authService.login(loginInput);
      } catch (error) {
        let message = "Unable to login. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess(data, variables, context) {
      console.log(data);
      queryClient.setQueryData(["authUser"], data);
      navigate(WORKOUTS_ENDPOINT);
    },
  });
};
