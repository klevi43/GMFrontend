import React from "react";
import type { ModType } from "../../types/modContextType";
import AddWorkoutFormModal from "./workoutModals/AddWorkoutFormModal";
interface Props {
  type: ModType | null;
}
const ModalRenderer = ({ type }: Props) => {
  switch (type) {
    case "ADD_WORKOUT":
      return <AddWorkoutFormModal />;
    default:
      return <></>;
  }
};

export default ModalRenderer;
