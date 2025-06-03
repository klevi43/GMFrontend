import { keepPreviousData, useQuery } from "@tanstack/react-query";
import workoutService from "../../services/workoutService";

export const useGetWorkoutHistory = (pageNo: number, totalPages: number) => {
  return useQuery({
    queryKey: ["workoutHistory", pageNo],
    queryFn: () => workoutService.getMWorkoutHistory(pageNo),
    placeholderData: (prev) => prev,
  });
};
