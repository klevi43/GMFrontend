export interface AuthUser {
  email: string;
  role: string;
  isAuthenticated: boolean;
}

export type AuthContextType = {
  user: AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
};
