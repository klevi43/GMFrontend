import type WorkoutDto from "../dtos/workoutDto";

export interface ModContextType {
  modType: ModType | null;
  isOpen: boolean;
  initialData: InputDtoTypes | null;
  openModal: (type: ModType, initialData?: InputDtoTypes) => void;
  closeModal: () => void;
}

export type ModType = "ADD_WORKOUT" | "UPDATE_WORKOUT" | "DELETE_WORKOUT";

export type InputDtoTypes = WorkoutDto;
