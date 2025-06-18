import { useQuery } from "@tanstack/react-query";
import workoutService from "../../services/workoutService";

export const useGetWorkout = (workoutId: number) => {
  return useQuery({
    queryKey: ["workout", workoutId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return await workoutService.getWorkout(id as number); // cast to number if needed
    },
  });
};
