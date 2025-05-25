import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { WorkoutInput } from "../../types/inputTypes";
import workoutService from "../../services/workoutService";
import type Workout from "../../models/workout";
export const useUpdateWorkout = (
  options?: UseMutationOptions<
    AxiosResponse<Workout>,
    unknown,
    WorkoutInput,
    unknown
  >
): UseBaseMutationResult<
  AxiosResponse<Workout, any>,
  unknown,
  WorkoutInput,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workoutInput: WorkoutInput) =>
      workoutService.updateWorkout(workoutInput),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
