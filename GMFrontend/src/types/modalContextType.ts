import type ExerciseDto from "../dtos/exerciseDto";
import type WorkoutDto from "../dtos/workoutDto";
import type { ExerciseInput, QueryParams, WorkoutInput } from "./inputTypes";
export default interface ModalContextType {
  type: "add" | "update" | "delete" | null;
  data: WorkoutInput | ExerciseInput | null;
  optionalDto: WorkoutDto | ExerciseDto | null;
  queryParams: QueryParams | null;
  isOpen: boolean;
  openModal: (
    type: ModalContextType["type"],
    data: ModalContextType["data"],
    optionalDto: ModalContextType["optionalDto"],
    queryParams: ModalContextType["queryParams"]
  ) => void;
  closeModal: () => void;
}
