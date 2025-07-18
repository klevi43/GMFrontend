import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import axios from "axios";
import workoutService from "../../services/workoutService";
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
      queryClient.invalidateQueries({ queryKey: ["workoutHistory"] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
