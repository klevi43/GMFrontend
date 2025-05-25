import type Workout from "../models/workout";
export default interface ModalContextType {
  type: "add" | "update" | "delete" | null;
  data: Workout | null;
  isOpen: boolean;
  openModal: (
    type: ModalContextType["type"],
    data: ModalContextType["data"]
  ) => void;
  closeModal: () => void;
}
