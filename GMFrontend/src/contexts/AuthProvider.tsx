import { createContext, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import type { AuthContextType, AuthUser } from "../types/authContextType";
interface Props {
  children: React.ReactNode;
}
const authUser: AuthUser = {
  email: "",
  role: "ROLE_USER",
  isAuthenticated: false,
};
const AuthContext = createContext<AuthContextType>({
  user: authUser,
  setUser: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser>(authUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
