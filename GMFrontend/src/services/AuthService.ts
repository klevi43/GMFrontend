import axios from "axios";
import axiosInstance from "./axiosInstance";
import type { LoginFormData } from "../models/loginFormData";
import { LOGIN_ENDPOINT } from "../constants/constants";
export class AuthService {
  constructor() {}
  login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post(
        LOGIN_ENDPOINT,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (error) {
      console.log(error);
    }
  };
}
