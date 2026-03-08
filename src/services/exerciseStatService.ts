import type ExerciseDateRangeDto from "../dtos/exerciseDateRangeDto";
import type { ChartSettings, ExerciseDataDto } from "../types/chartTypes";
import axiosInstance from "./axiosInstance";

class ExerciseStatService {
  constructor() {}
  getExerciseData = async (
    chartSettings: ChartSettings,
  ): Promise<ExerciseDataDto[]> => {
    const startDate = new Date();
    if (chartSettings.dateRange === "1_MONTH") {
      startDate.setMonth(startDate.getMonth() - 1);
    } else if (chartSettings.dateRange === "3_MONTHS") {
      startDate.setMonth(startDate.getMonth() - 3);
    } else if (chartSettings.dateRange === "6_MONTHS") {
      startDate.setMonth(startDate.getMonth() - 6);
    } else if (chartSettings.dateRange === "1_YEAR") {
      startDate.setFullYear(startDate.getFullYear() - 1);
    }
    const exerciseDateRangeDto: ExerciseDateRangeDto = {
      exerciseName: chartSettings.exerciseName,
      startDate: startDate.toISOString(),
      endDate: new Date().toISOString(),
    };
    const response = await axiosInstance.post<ExerciseDataDto[]>(
      "/exercise-stat",
      exerciseDateRangeDto,
    );
    return response.data;
  };
}
export const exerciseStatService = new ExerciseStatService();
