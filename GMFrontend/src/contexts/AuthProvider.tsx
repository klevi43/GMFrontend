import { createContext, useState } from "react";
import axiosInstance from "../services/axiosInstance";

interface Props {
  children: React.ReactNode;
}
interface AuthContextType {
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
