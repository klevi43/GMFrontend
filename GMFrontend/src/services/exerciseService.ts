import axiosInstance from "./axiosInstance";
import type { ExerciseInput } from "../types/inputTypes";
import type { Axios, AxiosResponse } from "axios";
import type Exercise from "../models/exercise";
import {
  CREATE,
  DELETE,
  EXERCISES_ENDPOINT,
  UPDATE,
} from "../constants/Endpoints";
class ExerciseService {
  addExercise = async (
    exerciseInput: ExerciseInput
  ): Promise<AxiosResponse<Exercise, any>> => {
    const response = await axiosInstance.post(
      EXERCISES_ENDPOINT + CREATE,
      exerciseInput,
      {
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
    exerciseInput: Exercise
  ): Promise<AxiosResponse<Exercise, any>> => {
    const response = await axiosInstance.put(
      EXERCISES_ENDPOINT + UPDATE,
      exerciseInput,
      {
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
    workoutId: number,
    exerciseId: number
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
