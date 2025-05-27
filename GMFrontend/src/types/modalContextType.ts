import type ExerciseDto from "../dtos/exerciseDto";
import type WorkoutDto from "../dtos/workoutDto";
import type { ExerciseInput, WorkoutInput } from "./inputTypes";
export default interface ModalContextType {
  type: "add" | "update" | "delete" | null;
  data: WorkoutInput | ExerciseInput | null;
  optionalDto: WorkoutDto | ExerciseDto | null;
  isOpen: boolean;
  openModal: (
    type: ModalContextType["type"],
    data: ModalContextType["data"],
    optionalDto?: ModalContextType["optionalDto"]
  ) => void;
  closeModal: () => void;
}
