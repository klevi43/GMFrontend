import React from "react";
import type { DtoTypes, ModType } from "../../types/modContextType";
import AddWorkoutFormModal from "./workoutModals/AddWorkoutFormModal";
import UpdateWorkoutFormModal from "./workoutModals/UpdateWorkoutFormModal";
import { INITIAL_DATA_NOT_SET_MSG } from "../../constants/errorMsgs";
import DeleteItemModal from "./DeleteItemModal";
import DeleteWorkoutModal from "./workoutModals/DeleteWorkoutModal";
import AddExerciseFormModal from "./exerciseModals/AddExerciseFormModal";
import { isExerciseDto, isWorkoutDto } from "../../typeGuards/typeGuards";
import UpdateExerciseFormModal from "./exerciseModals/UpdateExerciseFormModal";
interface Props {
  type: ModType | null;
  initialData: DtoTypes | null;
}
const ModalRenderer = ({ type, initialData }: Props) => {
  switch (type) {
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
    default:
      return <></>;
  }
};

export default ModalRenderer;
