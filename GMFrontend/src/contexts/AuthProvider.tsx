import { createContext, useState } from "react";
import type { AuthContextType } from "../types/AuthContextType";
import type AuthUserDto from "../dtos/authUserDto";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<AuthUserDto | null>(null);
  const storeAuthUser = (authUser: AuthUserDto) => {
    setAuthUser(authUser);
  };
  return (
    <AuthContext.Provider value={{ authUser, storeAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
