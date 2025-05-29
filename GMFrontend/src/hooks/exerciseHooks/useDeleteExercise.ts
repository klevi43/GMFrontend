import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import exerciseService from "../../services/exerciseService";
import axios from "axios";
import { useModal } from "../useModal";
import type { QueryParams } from "../../types/inputTypes";
import type ExerciseDto from "../../dtos/exerciseDto";
import type WorkoutDto from "../../dtos/workoutDto";

export const useDeleteExercise = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  QueryParams,
  unknown
> => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  return useMutation({
    mutationFn: async (queryParams: ExerciseDto) => {
      try {
        return await exerciseService.deleteExercise(
          queryParams.id,
          queryParams.workoutId
        );
      } catch (error) {
        let message = "Unable to delete exercise. Please try again later.";
        if (axios.isAxiosError(error) && error.message) {
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

export default useDeleteExercise;
