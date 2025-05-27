import React, { createContext, useState } from "react";
import type ModalContextType from "../types/modalContextType";
import DeleteItemModal from "../components/modals/DeleteItemModal";
import type { WorkoutInput } from "../types/inputTypes";
import { input, p } from "motion/react-client";
import {
  ADD_TYPE,
  DELETE_TYPE,
  UPDATE_TYPE,
} from "../constants/modalConstants";
import AddWorkoutFormModal from "../components/modals/workoutModals/AddWorkoutFormModal";
import UpdateWorkoutFormModal from "../components/modals/workoutModals/UpdateWorkoutFormModal";
import { isWorkoutInput } from "../schemas/workoutFormSchema";
import { isExerciseInput } from "../schemas/exerciseFormSchema";
import AddExerciseFormModal from "../components/modals/exerciseModals/AddExerciseFormModal";
import { useMenu } from "../hooks/useMenu";
import UpdateExerciseModal from "../components/modals/exerciseModals/UpdateExerciseModal";
import {
  mapToWorkoutInput,
  mapToExerciseInput,
} from "../mappers/dtoToInputMapper";
import { isWorkoutDto, isExerciseDto } from "../typeGuards/typeGuards";
interface Props {
  children: React.ReactNode;
}
const modalObj: ModalContextType = {
  type: null,
  data: null,
  optionalDto: null,
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};
const ModalContext = createContext<ModalContextType>(modalObj);

export const ModalProvider = ({ children }: Props) => {
  const [modalState, setModalState] = useState(modalObj);
  const { showOpenMenuById } = useMenu();
  const openModal = (
    type: ModalContextType["type"],
    data: ModalContextType["data"],
    optionalDto?: ModalContextType["optionalDto"]
  ) => {
    setModalState({
      type,
      data,
      optionalDto: optionalDto ?? null,
      isOpen: true,
      openModal,
      closeModal,
    });
    showOpenMenuById(-1);
  };
  const closeModal = () => {
    setModalState({ ...modalState, data: null, isOpen: false });
  };
  console.log(modalState);

  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
      {/* Workout */}
      {modalState.type === UPDATE_TYPE &&
        modalState.isOpen &&
        isWorkoutInput(modalState.data) && <UpdateWorkoutFormModal />}
      {modalState.type === ADD_TYPE &&
        modalState.isOpen &&
        isWorkoutInput(modalState.data) && <AddWorkoutFormModal />}

      {/* Exercise */}
      {modalState.type === ADD_TYPE &&
        modalState.isOpen &&
        isExerciseInput(modalState.data) && <AddExerciseFormModal />}
      {modalState.type === UPDATE_TYPE &&
        modalState.isOpen &&
        isExerciseDto(modalState.optionalDto) && (
          <UpdateExerciseModal
            workoutId={modalState.optionalDto?.workoutId}
            exerciseId={modalState.optionalDto.id}
            exerciseInput={mapToExerciseInput(modalState.optionalDto)}
          />
        )}

      {modalState.type === DELETE_TYPE &&
        modalState.isOpen &&
        modalState.optionalDto && (
          <DeleteItemModal
            title="Workout"
            deleteItemName={modalState.optionalDto.name}
            warning="This will delete all exercises and sets in this workout."
            handleClose={closeModal}
          />
        )}
    </ModalContext.Provider>
  );
};

export default ModalContext;
