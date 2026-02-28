import { useQuery } from "@tanstack/react-query";
import { exerciseDataService } from "../../services/exerciseDataService";

export const useGetExerciseStat = (exerciseName: string) => {
  return useQuery({
    queryKey: ["exerciseStat", exerciseName],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return await exerciseDataService.getExerciseData(id as string);
    },
  });
};
