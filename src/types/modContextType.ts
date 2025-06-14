import type ExerciseDto from "../dtos/exerciseDto";
import type SetDto from "../dtos/setDto";
import type UserDto from "../dtos/userDto";

import type WorkoutDto from "../dtos/workoutDto";

export interface ModContextType {
  modType: ModType | null;
  isOpen: boolean;
  initialData: DtoTypes | null;
  openModal: (type: ModType, initialData?: DtoTypes) => void;
  closeModal: () => void;
}

export type ModType =
  | AdminTypes
  | UserTypes
  | WorkoutTypes
  | ExerciseTypes
  | SetTypes;
type WorkoutTypes = "ADD_WORKOUT" | "UPDATE_WORKOUT" | "DELETE_WORKOUT";
type ExerciseTypes = "ADD_EXERCISE" | "UPDATE_EXERCISE" | "DELETE_EXERCISE";
type SetTypes = "ADD_SET" | "UPDATE_SET" | "DELETE_SET";
type UserTypes =
  | "UPDATE_USER_EMAIL"
  | "UPDATE_USER_PASSWORD"
  | "DELETE_USER_INFO";
type AdminTypes =
  | "ADMIN_DELETE_USER"
  | "ADMIN_PROMOTE_USER"
  | "ADMIN_DEMOTE_ADMIN";
export type DtoTypes = UserDto | WorkoutDto | ExerciseDto | SetDto;
