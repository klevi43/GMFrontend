import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import workoutService from "../../services/workoutService";
import axios from "axios";
import type Workout from "../../models/workout";
import type { WorkoutInput } from "../../types/inputTypes";
import { useModal } from "../useModal";

export const useDeleteWorkout = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  number,
  unknown
> => {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  return useMutation({
    mutationFn: async (workoutId: number) => {
      try {
        return await workoutService.deleteWorkout(workoutId);
      } catch (error) {
        let message = "Unable to delete workout. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      closeModal();
    },
  });
};
