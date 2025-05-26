import axiosInstance from "./axiosInstance";
import type { SetInput } from "../types/inputTypes";
import type SetDto from "../dtos/setDto";
import type { Axios, AxiosResponse } from "axios";
import { CREATE, DELETE, SETS_ENDPOINT, UPDATE } from "../constants/endpoints";
import { set } from "react-hook-form";
class SetService {
  addSet = async (
    setInput: SetInput,
    workoutId: number,
    exerciseId: number
  ): Promise<AxiosResponse<SetDto, any>> => {
    const response = await axiosInstance.post(
      SETS_ENDPOINT + CREATE,
      setInput,
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

  updateSet = async (
    setInput: SetInput,
    workoutId: number,
    exerciseId: number,
    setId: number
  ): Promise<AxiosResponse<SetDto, any>> => {
    const response = await axiosInstance.put(SETS_ENDPOINT + UPDATE, setInput, {
      params: { workoutId, exerciseId, setId },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    return response.data;
  };

  deleteSet = async (
    workoutId: number,
    exerciseId: number,
    setId: number
  ): Promise<AxiosResponse<any, any>> => {
    const response = await axiosInstance.delete(SETS_ENDPOINT + DELETE, {
      params: { workoutId, exerciseId, setId },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    return response;
  };
}
