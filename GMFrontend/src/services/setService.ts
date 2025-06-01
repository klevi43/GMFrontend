import axiosInstance from "./axiosInstance";
import type { SetInput } from "../types/inputTypes";
import type SetDto from "../dtos/setDto";
import type { Axios, AxiosResponse } from "axios";
import { CREATE, DELETE, SETS_ENDPOINT, UPDATE } from "../constants/endpoints";

class SetService {
  addSet = async (
    setInput: SetInput,
    exerciseId: number,
    workoutId: number
  ): Promise<SetDto> => {
    const response = await axiosInstance.post(
      SETS_ENDPOINT + CREATE,
      setInput,
      {
        params: {
          workoutId: workoutId,
          exerciseId: exerciseId,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  updateSet = async (
    setInput: SetInput,
    setId: number,
    exerciseId: number,
    workoutId: number
  ): Promise<SetDto> => {
    const response = await axiosInstance.put(SETS_ENDPOINT + UPDATE, setInput, {
      params: { workoutId, exerciseId, setId },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  deleteSet = async (
    setId: number,
    exerciseId: number,
    workoutId: number
  ): Promise<AxiosResponse<any, any>> => {
    const response = await axiosInstance.delete(SETS_ENDPOINT + DELETE, {
      params: { workoutId, exerciseId, setId },
    });
    return response;
  };
}

const setService = new SetService();
export default setService;
