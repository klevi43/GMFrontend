import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type ExerciseDto from "../../dtos/exerciseDto";
import type { ExerciseInput } from "../../types/inputTypes";
import { getExerciseId, getWorkoutId } from "../../utils/QueryParamHelpers";
import { useMod } from "../useMod";
import exerciseService from "../../services/exerciseService";
import axios from "axios";
import { formatApiError } from "../../utils/formatApiError";

export const useUpdateExercise = (
  options?: UseMutationOptions<ExerciseDto, unknown, ExerciseInput, unknown>
): UseBaseMutationResult<ExerciseDto, unknown, ExerciseInput, unknown> => {
  const { closeModal } = useMod();
  const workoutId = getWorkoutId();
  const exerciseId = getExerciseId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (exerciseInput: ExerciseInput) => {
      try {
        return await exerciseService.updateExercise(
          exerciseInput,
          exerciseId,
          workoutId
        );
      } catch (error) {
        let message = "Unable to update exercise. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response.data.message);
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["workout"] });
      options?.onSuccess?.(data, variables, context);
      setTimeout(() => closeModal(), 3000);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
