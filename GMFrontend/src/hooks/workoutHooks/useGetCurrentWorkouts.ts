import { useQuery, type QueryObserverResult } from "@tanstack/react-query";
import type WorkoutDto from "../../models/workout";
import workoutService from "../../services/workoutService";
export const useGetCurrentWorkouts = () => {
  return useQuery<WorkoutDto[], any>({
    queryKey: ["workouts"],
    queryFn: async () => await workoutService.getMostRecentWorkouts(),
  });
};
