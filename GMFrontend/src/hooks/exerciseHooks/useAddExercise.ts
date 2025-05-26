import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type ExerciseDto from "../../dtos/exerciseDto";
import type { ExerciseInput, WorkoutInput } from "../../types/inputTypes";
import { useModal } from "../useModal";
import exerciseService from "../../services/exerciseService";
import axios from "axios";

export const useAddExercise = (
  options?: UseMutationOptions<
    AxiosResponse<ExerciseDto>,
    unknown,
    ExerciseInput,
    unknown
  >
): UseBaseMutationResult<
  AxiosResponse<ExerciseDto, any>,
  unknown,
  ExerciseInput,
  unknown
> => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (exerciseInput: ExerciseInput) => {
      try {
        return await exerciseService.addExercise(
          exerciseInput,
          exerciseInput.workoutId
        );
      } catch (error) {
        let message = "Unable to add exercise. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, conext) => {
      queryClient.invalidateQueries({ queryKey: ["exercises"] });

      options?.onSuccess?.(data, variables, conext);
      closeModal();
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
