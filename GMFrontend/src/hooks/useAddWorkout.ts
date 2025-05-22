import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type Workout from "../models/workout";
import type { WorkoutInput } from "../types/inputTypes";
import workoutService from "../services/workoutService";
// AxiosResponse<WorkoutInput, any> = the expected response from the server.
// unknown = the error type (you can specify a custom one).
// WorkoutInput = the input you pass to the mutation (what you want to send to the backend).
// unknown = context type (advanced feature; often unused).
export const useAddWorkout = (): UseBaseMutationResult<
  AxiosResponse<Workout, any>,
  unknown,
  WorkoutInput,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workoutInput: WorkoutInput) =>
      workoutService.addWorkout(workoutInput),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
};
