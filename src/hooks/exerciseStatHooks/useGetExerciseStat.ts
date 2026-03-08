import { useQuery } from "@tanstack/react-query";
import { exerciseStatService } from "../../services/exerciseStatService";
import type { ChartSettings } from "../../types/chartTypes";

export const useGetExerciseStat = (chartSettings: ChartSettings) => {
  return useQuery({
    queryKey: ["chartSettings", chartSettings],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return await exerciseStatService.getExerciseData(id as ChartSettings);
    },
  });
};
