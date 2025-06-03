import type AuthUserDto from "../dtos/authUserDto";

export interface AuthContextType {
  authUser: AuthUserDto | null;
  storeAuthUser: (authUser: AuthUserDto) => void;
}
