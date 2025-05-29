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
import type { QueryParams } from "../../types/inputTypes";

interface Props {
  id: number;
  dtoObj: WorkoutDto | ExerciseDto;
  queryParams: QueryParams;
}
const MenuWrapper = React.memo(({ id, dtoObj, queryParams }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useModal();

  const handleOpenUpdateModalClick = () => {
    showOpenMenuById(-1);
    openModal(UPDATE_TYPE, null, dtoObj, queryParams);
  };

  const handleOpenDeleteModalClick = () => {
    showOpenMenuById(-1);
    openModal(DELETE_TYPE, null, dtoObj, queryParams);
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
