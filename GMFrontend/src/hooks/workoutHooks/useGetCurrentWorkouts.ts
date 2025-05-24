import { useQuery, type QueryObserverResult } from "@tanstack/react-query";
import type Workout from "../../models/workout";
import workoutService from "../../services/workoutService";
export const useGetCurrentWorkouts = () => {
  return useQuery<Workout[], any>({
    queryKey: ["workouts"],
    queryFn: async () => await workoutService.getMostRecentWorkouts(),
  });
};
