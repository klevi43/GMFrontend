import type WorkoutDto from "../dtos/workoutDto";

export interface ModContextType {
  modType: ModType | null;
  isOpen: boolean;
  initialData: InputDtoTypes | null;
  openModal: (type: ModType, initialData?: InputDtoTypes) => void;
  closeModal: () => void;
}

export type ModType = WorkoutTypes | ExerciseTypes;
type WorkoutTypes = "ADD_WORKOUT" | "UPDATE_WORKOUT" | "DELETE_WORKOUT";
type ExerciseTypes = "ADD_EXERCISE" | "UPDATE_EXERCISE" | "DELETE_EXERCISE";
export type InputDtoTypes = WorkoutDto;
