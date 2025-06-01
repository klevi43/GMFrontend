import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type ExerciseDto from "../../dtos/exerciseDto";
import type { ExerciseInput } from "../../types/inputTypes";
import { getExerciseId, getWorkoutId } from "../../utils/QueryParamHelpers";
import { useMod } from "../useMod";
import exerciseService from "../../services/exerciseService";
import axios from "axios";

export const useUpdateExercise = (): UseBaseMutationResult<
  ExerciseDto,
  unknown,
  ExerciseInput,
  unknown
> => {
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
        console.log(error);
        let message = "Unable to update exercise. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workout"] });
      closeModal();
    },
  });
};
