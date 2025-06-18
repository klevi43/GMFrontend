import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import axios from "axios";
import setService from "../../services/setService";
import { formatApiError } from "../../utils/formatApiError";
import { getExerciseId, getWorkoutId } from "../../utils/QueryParamHelpers";

export const useDeleteSet = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    number,
    unknown
  >
): UseBaseMutationResult<AxiosResponse<any, any>, unknown, number, unknown> => {
  const queryClient = useQueryClient();
  const workoutId = getWorkoutId();
  const exerciseId = getExerciseId();

  return useMutation({
    mutationFn: async (setId: number) => {
      try {
        return await setService.deleteSet(setId, exerciseId, workoutId);
      } catch (error) {
        let message = "Unable to delete set. Please try again later.";
        if (axios.isAxiosError(error) && error.message) {
          message = formatApiError(error.response?.data?.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["workout"] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
