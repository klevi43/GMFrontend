import type { ExerciseDataDto } from "../types/chartTypes";
import axiosInstance from "./axiosInstance";

class ExerciseDataService {
  constructor() {}
  getExerciseData = async (
    exerciseName: string,
  ): Promise<ExerciseDataDto[]> => {
    const response = await axiosInstance.get<ExerciseDataDto[]>(
      "/exercise-stat",
      {
        params: { exerciseName },
      },
    );
    return response.data;
  };
}
export const exerciseDataService = new ExerciseDataService();
