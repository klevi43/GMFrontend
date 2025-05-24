import type Workout from "../models/workout";
export default interface ModalContextType {
  data: Workout | null;
  isOpen: boolean;
  openModal: (data: Workout) => void;
  closeModal: () => void;
}
