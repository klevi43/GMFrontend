export interface AuthUser {
  email: string;
  role: "ROLE_USER" | "ROLE_ADMIN";
  isAuthenticated: boolean;
}

export type AuthContextType = {
  authUser: AuthUser;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser>>;
};
