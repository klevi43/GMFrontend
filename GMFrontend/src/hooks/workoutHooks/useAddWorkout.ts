import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type Workout from "../../models/workout";
import type { WorkoutInput } from "../../types/inputTypes";
import workoutService from "../../services/workoutService";
import { useModal } from "../useModal";
// AxiosResponse<Workout, any> = the expected response from the server.
// unknown = the error type (you can specify a custom one).
// WorkoutInput = the input you pass to the mutation (what you want to send to the backend).
// unknown = context type (advanced feature; often unused).
export const useAddWorkout = (
  options?: UseMutationOptions<
    AxiosResponse<Workout>, // Type returned by mutationFn
    unknown, // Type of error (usually use `unknown`)
    WorkoutInput, // Type of data passed into mutate()
    unknown // Type of context (for rollback, rarely used)
  >
): UseBaseMutationResult<
  AxiosResponse<Workout, any>,
  unknown,
  WorkoutInput,
  unknown
> => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      workoutInput: WorkoutInput // pass in workoutInput to addWorkout fn
    ) => workoutService.addWorkout(workoutInput),
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
      console.log(error);
    },
  });
};
