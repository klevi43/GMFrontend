import type ExerciseDto from "../dtos/exerciseDto";
import type WorkoutDto from "../dtos/workoutDto";

export interface ModContextType {
  modType: ModType | null;
  isOpen: boolean;
  initialData: DtoTypes | null;
  openModal: (type: ModType, initialData?: DtoTypes) => void;
  closeModal: () => void;
}

export type ModType = WorkoutTypes | ExerciseTypes | SetTypes;
type WorkoutTypes = "ADD_WORKOUT" | "UPDATE_WORKOUT" | "DELETE_WORKOUT";
type ExerciseTypes = "ADD_EXERCISE" | "UPDATE_EXERCISE" | "DELETE_EXERCISE";
type SetTypes = "ADD_SET" | "UPDATE_SET" | "DELETE_SET";
export type DtoTypes = WorkoutDto | ExerciseDto;
