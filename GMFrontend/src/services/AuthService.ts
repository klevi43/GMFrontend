import axios from "axios";
import axiosInstance from "./axiosInstance";
import { LOGIN_ENDPOINT } from "../constants/constants";
import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";
export class AuthService {
  constructor() {}
  login = async (email: string, password: string) => {
    const [auth, setAuth] = useContext(AuthContext);
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
      if (response.status == 200) {
        authContext;
      }
    } catch (error) {
      console.log(error);
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
