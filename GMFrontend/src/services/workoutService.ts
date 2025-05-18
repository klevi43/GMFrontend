import { GET_CURRENT_WORKOUTS } from "../constants/workoutEndpoints";
import axiosInstance from "./axiosInstance";
class WorkoutService {
  getMostRecentWorkouts = async () => {
    return axiosInstance.get(GET_CURRENT_WORKOUTS, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      withCredentials: true,
    });
  };
}

const workoutService = new WorkoutService();
export default workoutService;
