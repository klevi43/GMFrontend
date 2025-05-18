import { createContext, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import type { AuthContextType, AuthUser } from "../types/authContextType";
interface Props {
  children: React.ReactNode;
}
const authUserObj: AuthUser = {
  email: "",
  role: "ROLE_USER",
  isAuthenticated: false,
};
const AuthContext = createContext<AuthContextType>({
  authUser: authUserObj,
  setAuthUser: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<AuthUser>(authUserObj);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
