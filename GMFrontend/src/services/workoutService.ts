import type { AxiosResponse } from "axios";
import { GET_CURRENT_WORKOUTS } from "../constants/workoutEndpoints";
import type Workout from "../models/workout";
import axiosInstance from "./axiosInstance";
import type { AddWorkoutFormFieldsType } from "../types/formFieldsType";
import type { WorkoutInput } from "../types/inputTypes";
import { header } from "motion/react-client";
class WorkoutService {
  getMostRecentWorkouts = async (): Promise<Workout[]> => {
    try {
      const response = await axiosInstance.get<Workout[]>(
        GET_CURRENT_WORKOUTS,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );
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
    return await axiosInstance.post("/workouts/create", WorkoutInput, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  };

  editWorkout = async (
    workoutInput: WorkoutInput
  ): Promise<AxiosResponse<Workout, any>> => {
    return await axiosInstance.put("/workouts/update", workoutInput, {
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
    return await axiosInstance.delete("/workouts/delete", {
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
