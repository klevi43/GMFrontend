import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";

import type WorkoutDto from "../../dtos/workoutDto";
import type { WorkoutInput } from "../../types/inputTypes";
import workoutService from "../../services/workoutService";
import axios from "axios";
import { useMod } from "../useMod";
import { formatApiError } from "../../utils/formatApiError";
// AxiosResponse<Workout, any> = the expected response from the server.
// unknown = the error type (you can specify a custom one).
// WorkoutInput = the input you pass to the mutation (what you want to send to the backend).
// unknown = context type (advanced feature; often unused).
export const useAddWorkout = (
  options?: UseMutationOptions<
    WorkoutDto, // Type returned by mutationFn
    unknown, // Type of error (usually use `unknown`)
    WorkoutInput, // Type of data passed into mutate()
    unknown // Type of context (for rollback, rarely used)
  >
): UseBaseMutationResult<WorkoutDto, unknown, WorkoutInput, unknown> => {
  const { closeModal } = useMod();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      workoutInput: WorkoutInput // pass in workoutInput to addWorkout fn
    ) => {
      try {
        return await workoutService.addWorkout(workoutInput);
      } catch (error) {
        let message = "Unable to add workout. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = formatApiError(error.response?.data?.message);
        }
        throw new Error(message);
      }
    },

    onSuccess: (data, variables, context) => {
      // data: the Axios response
      // variable: the input (workoutInput)
      // context: optional context for optimistic updates
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      queryClient.invalidateQueries({ queryKey: ["workoutHistory"] });
      // pass to user defined handler
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
