import axios from "axios";
import axiosInstance from "./axiosInstance";
import { LOGIN_ENDPOINT } from "../constants/constants";
import { useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import type { AuthUser } from "../types/authContextType";
import type { ServerError } from "../types/serverErrorContextType";
import { s } from "motion/react-m";
export class AuthService {
  constructor() {}
  login = async (
    email: string,
    password: string,
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>,
    setServerError: React.Dispatch<React.SetStateAction<ServerError>>
  ) => {
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
      setServerError({});
      const authenticatedUser: AuthUser = {
        email: response.data.email,
        role: response.data.role,
        isAuthenticated: true,
      };
      setUser(authenticatedUser);
    } catch (error: any) {
      const serverError: ServerError = {
        status: error.response.data.status,
        msg: error.response.data.message,
        timestamp: error.response.data.timestamp,
      };

      setServerError(serverError);
    }
  };
  logout = async () => {
    try {
      const response = await axiosInstance.post(
        "/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}
