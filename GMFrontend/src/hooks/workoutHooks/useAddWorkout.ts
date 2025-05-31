import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type WorkoutDto from "../../dtos/workoutDto";
import type { WorkoutInput } from "../../types/inputTypes";
import workoutService from "../../services/workoutService";
import { useModal } from "../useModal";
import axios from "axios";
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
  const { closeModal } = useModal();
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
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },

    onSuccess: (data, variables, context) => {
      // data: the Axios response
      // variable: the input (workoutInput)
      // context: optional context for optimistic updates
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      // pass to user defined handler
      options?.onSuccess?.(data, variables, context);
      closeModal();
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
