import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import axios from "axios";
import type ExerciseDto from "../../dtos/exerciseDto";
import exerciseService from "../../services/exerciseService";
import type { ExerciseInput } from "../../types/inputTypes";
import { getWorkoutId } from "../../utils/QueryParamHelpers";
import { useMod } from "../useMod";

export const useAddExercise = (
  options?: UseMutationOptions<ExerciseDto, unknown, ExerciseInput, unknown>
): UseBaseMutationResult<ExerciseDto, unknown, ExerciseInput, unknown> => {
  const { closeModal } = useMod();
  const workoutId = getWorkoutId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (exerciseInput: ExerciseInput) => {
      try {
        return await exerciseService.addExercise(exerciseInput, workoutId);
      } catch (error) {
        console.log(error);
        let message = "Unable to add exercise. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, conext) => {
      queryClient.invalidateQueries({ queryKey: ["workout"] });
      options?.onSuccess?.(data, variables, conext);
      closeModal();
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
