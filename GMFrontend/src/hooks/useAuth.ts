import AuthContext from "../contexts/AuthProvider";
import { useContext } from "react";
export const useAuth = () => {
  return useContext(AuthContext);
};
