import type { AxiosResponse } from "axios";
import {
  CREATE,
  DELETE,
  HISTORY,
  UPDATE,
  WORKOUT,
  WORKOUTS_ENDPOINT,
} from "../constants/endpoints";
import type WorkoutDto from "../dtos/workoutDto";
import axiosInstance from "./axiosInstance";
import type { WorkoutInput } from "../types/inputTypes";
class WorkoutService {
  getMostRecentWorkouts = async (): Promise<WorkoutDto[]> => {
    try {
      const response = await axiosInstance.get<WorkoutDto[]>(
        WORKOUTS_ENDPOINT,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getMWorkoutHistory = async (pageNo: number) => {
    const response = await axiosInstance.get(WORKOUTS_ENDPOINT + HISTORY, {
      params: { pageNo: pageNo, pageSize: 10 },
    });
    return response;
  };

  getWorkout = async (workoutId: number): Promise<WorkoutDto> => {
    const response = await axiosInstance.get(WORKOUTS_ENDPOINT + WORKOUT, {
      params: { workoutId },
    });
    return response.data;
  };

  addWorkout = async (workoutInput: WorkoutInput): Promise<WorkoutDto> => {
    return await axiosInstance.post(WORKOUTS_ENDPOINT + CREATE, workoutInput, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  updateWorkout = async (
    workoutInput: WorkoutInput,
    workoutId: number
  ): Promise<WorkoutDto> => {
    return await axiosInstance.put(WORKOUTS_ENDPOINT + UPDATE, workoutInput, {
      params: { workoutId },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  deleteWorkout = async (
    workoutId: number
  ): Promise<AxiosResponse<any, any>> => {
    return await axiosInstance.delete(WORKOUTS_ENDPOINT + DELETE, {
      params: { workoutId },
    });
  };
}

const workoutService = new WorkoutService();
export default workoutService;
