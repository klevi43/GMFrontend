import type { AxiosResponse } from "axios";
import {
  CREATE,
  DELETE,
  EXERCISES_ENDPOINT,
  UPDATE,
} from "../constants/endpoints";
import type ExerciseDto from "../dtos/exerciseDto";
import type { ExerciseInput } from "../types/inputTypes";
import axiosInstance from "./axiosInstance";
class ExerciseService {
  addExercise = async (
    exerciseInput: ExerciseInput,
    workoutId: number
  ): Promise<ExerciseDto> => {
    const response = await axiosInstance.post(
      EXERCISES_ENDPOINT + CREATE,
      exerciseInput,
      {
        params: { workoutId },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  updateExercise = async (
    updatedExercise: ExerciseInput,
    exerciseId: number,
    workoutId: number
  ): Promise<ExerciseDto> => {
    const response = await axiosInstance.put(
      EXERCISES_ENDPOINT + UPDATE,
      { name: updatedExercise.name },
      {
        params: { workoutId, exerciseId },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  deleteExercise = async (
    exerciseId: number,
    workoutId: number
  ): Promise<AxiosResponse<any, any>> => {
    const response = await axiosInstance.delete(EXERCISES_ENDPOINT + DELETE, {
      params: { workoutId, exerciseId },
    });
    return response;
  };
}
const exerciseService = new ExerciseService();
export default exerciseService;
