import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { getExerciseId, getWorkoutId } from "../../utils/QueryParamHelpers";
import type { AxiosResponse } from "axios";
import { useMod } from "../useMod";
import setService from "../../services/setService";
import axios from "axios";
import { formatApiError } from "../../utils/formatApiError";

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
  const { closeModal } = useMod();
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
      closeModal();
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
