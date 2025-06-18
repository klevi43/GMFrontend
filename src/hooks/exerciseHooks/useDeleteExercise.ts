import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import axios from "axios";
import exerciseService from "../../services/exerciseService";
import { formatApiError } from "../../utils/formatApiError";
import { getWorkoutId } from "../../utils/QueryParamHelpers";

export const useDeleteExercise = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    number,
    unknown
  >
): UseBaseMutationResult<AxiosResponse<any, any>, unknown, number, unknown> => {
  const queryClient = useQueryClient();
  const workoutId = getWorkoutId();

  return useMutation({
    mutationFn: async (exerciseId: number) => {
      try {
        return await exerciseService.deleteExercise(exerciseId, workoutId);
      } catch (error) {
        let message = "Unable to delete exercise. Please try again later.";
        if (axios.isAxiosError(error) && error.message) {
          message = formatApiError(error.response?.data?.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workout"] });
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};

export default useDeleteExercise;
