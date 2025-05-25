import type { AxiosResponse } from "axios";
import {
  CREATE,
  DELETE,
  UPDATE,
  WORKOUTS_ENDPOINT,
} from "../constants/workoutEndpoints";
import type Workout from "../models/workout";
import axiosInstance from "./axiosInstance";
import type { WorkoutInput } from "../types/inputTypes";
class WorkoutService {
  getMostRecentWorkouts = async (): Promise<Workout[]> => {
    try {
      const response = await axiosInstance.get<Workout[]>(WORKOUTS_ENDPOINT, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  addWorkout = async (
    WorkoutInput: WorkoutInput
  ): Promise<AxiosResponse<Workout, any>> => {
    return await axiosInstance.post(WORKOUTS_ENDPOINT + CREATE, WorkoutInput, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  };

  updateWorkout = async (
    workoutInput: WorkoutInput
  ): Promise<AxiosResponse<Workout, any>> => {
    return await axiosInstance.put(WORKOUTS_ENDPOINT + UPDATE, workoutInput, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  };
  deleteWorkout = async (
    workoutId: number
  ): Promise<AxiosResponse<any, any>> => {
    return await axiosInstance.delete(WORKOUTS_ENDPOINT + DELETE, {
      params: { workoutId },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  };
}

const workoutService = new WorkoutService();
export default workoutService;
