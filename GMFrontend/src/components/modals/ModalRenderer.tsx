import React from "react";
import type { InputDtoTypes, ModType } from "../../types/modContextType";
import AddWorkoutFormModal from "./workoutModals/AddWorkoutFormModal";
import UpdateWorkoutFormModal from "./workoutModals/UpdateWorkoutFormModal";
import { INITIAL_DATA_NOT_SET_MSG } from "../../constants/errorMsgs";
import DeleteItemModal from "./DeleteItemModal";
import DeleteWorkoutModal from "./workoutModals/DeleteWorkoutModal";
import AddExerciseFormModal from "./exerciseModals/AddExerciseFormModal";
interface Props {
  type: ModType | null;
  initialData: InputDtoTypes | null;
}
const ModalRenderer = ({ type, initialData }: Props) => {
  switch (type) {
    case "ADD_WORKOUT":
      return <AddWorkoutFormModal />;
    case "UPDATE_WORKOUT":
      if (!initialData) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateWorkoutFormModal initialData={initialData} />;
    case "DELETE_WORKOUT":
      if (!initialData) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteWorkoutModal initialData={initialData} />;
    case "ADD_EXERCISE":
      return <AddExerciseFormModal />;
    default:
      return <></>;
  }
};

export default ModalRenderer;
