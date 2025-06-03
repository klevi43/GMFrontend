import React from "react";
import type { DtoTypes, ModType } from "../../types/modContextType";
import AddWorkoutFormModal from "./workoutModals/AddWorkoutFormModal";
import UpdateWorkoutFormModal from "./workoutModals/UpdateWorkoutFormModal";
import { INITIAL_DATA_NOT_SET_MSG } from "../../constants/errorMsgs";

import DeleteWorkoutModal from "./workoutModals/DeleteWorkoutModal";
import AddExerciseFormModal from "./exerciseModals/AddExerciseFormModal";
import {
  isExerciseDto,
  isSetDto,
  isUserResponseDto,
  isWorkoutDto,
} from "../../typeGuards/typeGuards";
import UpdateExerciseFormModal from "./exerciseModals/UpdateExerciseFormModal";
import DeleteExerciseFormModal from "./exerciseModals/DeleteExerciseFormModal";
import AddSetFormModal from "./setModals/AddSetFormModal";
import DeleteSetFormModal from "./setModals/DeleteSetFormModal";
import UpdateSetFormModal from "./setModals/UpdateSetFormModal";
import UpdateUserInfoModal from "./userModals/UpdateUserInfoModal";
interface Props {
  type: ModType | null;
  initialData: DtoTypes | null;
}
const ModalRenderer = ({ type, initialData }: Props) => {
  switch (type) {
    case "UPDATE_USER_INFO":
      if (!initialData || !isUserResponseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateUserInfoModal initialData={initialData} />;
    case "ADD_WORKOUT":
      return <AddWorkoutFormModal />;
    case "UPDATE_WORKOUT":
      if (!initialData || !isWorkoutDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateWorkoutFormModal initialData={initialData} />;
    case "DELETE_WORKOUT":
      if (!initialData || !isWorkoutDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteWorkoutModal initialData={initialData} />;
    case "ADD_EXERCISE":
      return <AddExerciseFormModal />;

    case "UPDATE_EXERCISE":
      if (!initialData || !isExerciseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateExerciseFormModal initialData={initialData} />;
    case "DELETE_EXERCISE":
      if (!initialData || !isExerciseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteExerciseFormModal initialData={initialData} />;
    case "ADD_SET":
      return <AddSetFormModal />;
    case "UPDATE_SET":
      if (!initialData || !isSetDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateSetFormModal initialData={initialData} />;
    case "DELETE_SET":
      if (!initialData || !isSetDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteSetFormModal initialData={initialData} />;
    default:
      return <></>;
  }
};

export default ModalRenderer;
