export interface AuthUser {
  email: string;
  role: "ROLE_USER" | "ROLE_ADMIN";
  isAuthenticated: boolean;
}

export type AuthContextType = {
  user: AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
};
