import type { ExerciseInput, WorkoutInput } from "./inputTypes";
export default interface ModalContextType {
  type: "add" | "update" | "delete" | null;
  data: WorkoutInput | ExerciseInput | null;
  isOpen: boolean;
  openModal: (
    type: ModalContextType["type"],
    data: ModalContextType["data"]
  ) => void;
  closeModal: () => void;
}
