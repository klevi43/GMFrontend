import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { SetInput } from "../../types/inputTypes";
import { useMod } from "../useMod";
import { getExerciseId, getWorkoutId } from "../../utils/QueryParamHelpers";
import type SetDto from "../../dtos/setDto";
import setService from "../../services/setService";
import axios from "axios";
import { formatApiError } from "../../utils/formatApiError";

export const useAddSet = (
  options?: UseMutationOptions<
    SetDto,
    unknown, // Type of error (usually use `unknown`)
    SetInput, // Type of data passed into mutate()
    unknown // Type of context (for rollback, rarely used)
  >
): UseBaseMutationResult<SetDto, unknown, SetInput, unknown> => {
  const { closeModal } = useMod();
  const workoutId = getWorkoutId();
  const exerciseId = getExerciseId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (setInput: SetInput) => {
      try {
        return await setService.addSet(setInput, exerciseId, workoutId);
      } catch (error) {
        let message = "Unable to add set. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
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
