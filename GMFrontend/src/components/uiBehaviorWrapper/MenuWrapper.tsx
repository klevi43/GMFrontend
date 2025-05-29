import React from "react";
import { useMenu } from "../../hooks/useMenu";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";
import ListItemMenuModal from "../workoutList/ListItemMenuModal";
import { useModal } from "../../hooks/useModal";
import { DELETE_TYPE, UPDATE_TYPE } from "../../constants/modalConstants";
import type ExerciseDto from "../../dtos/exerciseDto";
import type WorkoutDto from "../../dtos/workoutDto";
import { isExerciseDto, isWorkoutDto } from "../../typeGuards/typeGuards";
import {
  mapToExerciseInput,
  mapToWorkoutInput,
} from "../../mappers/dtoToInputMapper";

interface Props {
  id: number;
  dtoObj: WorkoutDto | ExerciseDto;
}
const MenuWrapper = React.memo(({ id, dtoObj }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useModal();

  const handleOpenUpdateModalClick = () => {
    openModal(UPDATE_TYPE, null, dtoObj);
  };

  const handleOpenDeleteModalClick = () => {
    openModal(DELETE_TYPE, null, dtoObj);
  };
  return (
    <>
      {openMenuId === id && (
        <ListItemMenuModal
          handleOpenUpdateModalClick={handleOpenUpdateModalClick}
          handleOpenDeleteModalClick={handleOpenDeleteModalClick}
        />
      )}
      <ListItemOptionsButton showMenu={showOpenMenuById} id={id} />
    </>
  );
});
export default MenuWrapper;
