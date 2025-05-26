import axios from "axios";
import axiosInstance from "./axiosInstance";
import { LOGIN_ENDPOINT } from "../constants/constants";

import type { AuthUser } from "../types/authContextType";
import type { ServerError } from "../types/serverErrorContextType";
import type User from "../dtos/user";
class AuthService {
  constructor() {}
  login = async (
    email: string,
    password: string,
    setAuthUser: React.Dispatch<React.SetStateAction<AuthUser>>,
    setServerError: React.Dispatch<React.SetStateAction<ServerError>>
  ) => {
    try {
      const user: User = {
        email: email,
        password: password,
      };
      const response = await axiosInstance.post(
        LOGIN_ENDPOINT,
        JSON.stringify(user),
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
      console.log("setAuthUser is ", setAuthUser);
      setAuthUser(authenticatedUser);
    } catch (error: any) {
      if (error.response && error.response.data) {
        const serverError: ServerError = {
          status: error.response.data.status,
          msg: error.response.data.message,
          timestamp: error.response.data.timestamp,
        };
        setServerError(serverError);
      } else {
        // fallback for unexpected error shape
        setServerError({
          status: 500,
          msg: "An unexpected error occurred.",
          timestamp: new Date().toISOString(),
        });
        console.error("Login error:", error);
      }
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
const authService = new AuthService();
export default authService;
