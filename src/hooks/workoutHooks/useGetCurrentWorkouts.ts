import { useQuery } from "@tanstack/react-query";
import type WorkoutDto from "../../dtos/workoutDto";
import workoutService from "../../services/workoutService";
export const useGetCurrentWorkouts = () => {
  return useQuery<WorkoutDto[], any>({
    queryKey: ["workouts"],
    queryFn: async () => await workoutService.getMostRecentWorkouts(),
  });
};
