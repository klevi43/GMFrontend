import { keepPreviousData, useQuery } from "@tanstack/react-query";
import workoutService from "../../services/workoutService";

export const useGetWorkoutHistory = (pageNo: number) => {
  return useQuery({
    queryKey: ["workoutHistory", pageNo],
    queryFn: () => workoutService.getMWorkoutHistory(pageNo),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });
};
