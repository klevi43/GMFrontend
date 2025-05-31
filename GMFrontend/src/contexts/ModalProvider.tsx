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
import { useDeleteWorkout } from "../hooks/workoutHooks/useDeleteWorkout";
import useDeleteExercise from "../hooks/exerciseHooks/useDeleteExercise";
import { useAddExercise } from "../hooks/exerciseHooks/useAddExercise";
interface Props {
  children: React.ReactNode;
}
const modalObj: ModalContextType = {
  type: null,
  data: null,
  optionalDto: null,
  queryParams: null,
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
    optionalDto: ModalContextType["optionalDto"],
    queryParams: ModalContextType["queryParams"]
  ) => {
    console.log(modalState);
    setModalState({
      type,
      data,
      optionalDto: optionalDto ?? null,
      queryParams: queryParams ?? null,
      isOpen: true,
      openModal,
      closeModal,
    });
    showOpenMenuById(-1);
  };
  const closeModal = () => {
    setModalState({
      ...modalState,
      data: null,
      isOpen: false,
      optionalDto: null,
      queryParams: null,
    });
  };
  console.log(modalState);

  const deleteWorkoutMutation = useDeleteWorkout();
  const deleteExerciseMutation = useDeleteExercise();
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
        modalState.queryParams?.workoutId &&
        modalState.queryParams.exerciseId &&
        modalState.isOpen &&
        isExerciseDto(modalState.optionalDto) && (
          <UpdateExerciseModal
            workoutId={modalState.queryParams?.workoutId}
            exerciseId={modalState.queryParams.exerciseId}
            exerciseInput={mapToExerciseInput(modalState.optionalDto)}
          />
        )}

      {modalState.type === DELETE_TYPE &&
        modalState.isOpen &&
        modalState.queryParams?.workoutId &&
        isWorkoutDto(modalState.optionalDto) &&
        modalState.optionalDto && (
          <DeleteItemModal
            title="Workout"
            warning="This will delete all exercises and sets in this workout."
            mutation={deleteWorkoutMutation}
          />
        )}
      {modalState.type === DELETE_TYPE &&
        modalState.isOpen &&
        isExerciseDto(modalState.optionalDto) &&
        modalState.optionalDto && (
          <DeleteItemModal
            title="Exercise"
            warning="This will delete all sets for this exercise."
            mutation={deleteExerciseMutation}
          />
        )}
    </ModalContext.Provider>
  );
};

export default ModalContext;
