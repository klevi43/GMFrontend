import axiosInstance from "./axiosInstance";
import type {
  ExerciseInput,
  QueryParams,
  UpdateExerciseInput,
} from "../types/inputTypes";
import type { Axios, AxiosResponse } from "axios";
import type ExerciseDto from "../dtos/exerciseDto";
import {
  CREATE,
  DELETE,
  EXERCISES_ENDPOINT,
  UPDATE,
} from "../constants/endpoints";
import { getExerciseId, getWorkoutId } from "../utils/QueryParamHelpers";
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
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    return response;
  };
}
const exerciseService = new ExerciseService();
export default exerciseService;
