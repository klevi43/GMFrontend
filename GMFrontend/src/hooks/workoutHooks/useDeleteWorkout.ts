import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import workoutService from "../../services/workoutService";

export const useDeleteWorkout = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  number,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workoutId: number) => workoutService.deleteWorkout(workoutId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
};
