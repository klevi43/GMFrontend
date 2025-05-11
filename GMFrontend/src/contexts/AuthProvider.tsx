import { createContext, useState } from "react";
import axiosInstance from "../services/axiosInstance";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
