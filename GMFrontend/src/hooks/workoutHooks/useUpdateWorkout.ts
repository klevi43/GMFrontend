import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { WorkoutInput } from "../../types/inputTypes";
import workoutService from "../../services/workoutService";
import type WorkoutDto from "../../dtos/workoutDto";
import axios from "axios";
import { useModal } from "../useModal";
import { useMod } from "../useMod";
import { useQueryParams } from "../useQueryParams";
import { getWorkoutId } from "../../utils/QueryParamHelpers";
export const useUpdateWorkout = (
  options?: UseMutationOptions<WorkoutDto, unknown, WorkoutInput, unknown>
): UseBaseMutationResult<WorkoutDto, unknown, WorkoutInput, unknown> => {
  const { closeModal } = useMod();
  const workoutId = getWorkoutId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (workoutInput: WorkoutInput) => {
      try {
        return await workoutService.updateWorkout(workoutInput, workoutId);
      } catch (error) {
        let message = "Unable to update workout. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      options?.onSuccess?.(data, variables, context);
      closeModal();
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
