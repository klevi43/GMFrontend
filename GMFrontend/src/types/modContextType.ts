import type WorkoutDto from "../dtos/workoutDto";

interface ModContextType {
  modalType: ModalType;
  isOpen: boolean;
  openModal: (type: ModalType, payload?: WorkoutDto) => void;
  closeModal: () => void;
}

type ModalType = {
  type: "ADD_WORKOUT" | "UPDATE_WORKOUT" | "DELETE_WORKOUT";
};
