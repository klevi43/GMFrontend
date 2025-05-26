import type { AxiosResponse } from "axios";
import {
  CREATE,
  DELETE,
  UPDATE,
  WORKOUT,
  WORKOUTS_ENDPOINT,
} from "../constants/Endpoints";
import type Workout from "../models/workout";
import axiosInstance from "./axiosInstance";
import type { WorkoutInput } from "../types/inputTypes";
class WorkoutService {
  // TODO: unwrap response in methods
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

  getWorkout = async (workoutId: number): Promise<Workout> => {
    const response = await axiosInstance.get(WORKOUTS_ENDPOINT + WORKOUT, {
      params: { workoutId },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    return response.data;
  };

  addWorkout = async (
    workoutInput: WorkoutInput
  ): Promise<AxiosResponse<Workout, any>> => {
    return await axiosInstance.post(WORKOUTS_ENDPOINT + CREATE, workoutInput, {
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  };
}

const workoutService = new WorkoutService();
export default workoutService;
