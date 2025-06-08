import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import workoutService from "../../services/workoutService";
import axios from "axios";
import { useMod } from "../useMod";
import { formatApiError } from "../../utils/formatApiError";

export const useDeleteWorkout = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    number,
    unknown
  >
): UseBaseMutationResult<AxiosResponse<any, any>, unknown, number, unknown> => {
  const queryClient = useQueryClient();
  const { closeModal } = useMod();
  return useMutation({
    mutationFn: async (workoutId: number) => {
      try {
        return await workoutService.deleteWorkout(workoutId);
      } catch (error) {
        let message = "Unable to delete workout. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response?.data?.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      options?.onSuccess?.(data, variables, context);
      setTimeout(() => closeModal(), 3000);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
