import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import exerciseService from "../../services/exerciseService";
import axios from "axios";
import { useModal } from "../useModal";
import type {
  DeleteExerciseQueryParams,
  QueryParams,
} from "../../types/inputTypes";
export const useDeleteExercise = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  DeleteExerciseQueryParams,
  unknown
> => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  return useMutation({
    mutationFn: async (queryParams: DeleteExerciseQueryParams) => {
      try {
        return await exerciseService.deleteExercise(
          queryParams.exerciseId,
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
