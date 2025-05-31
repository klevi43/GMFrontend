import React, { useCallback } from "react";
import type ExerciseDto from "../../dtos/exerciseDto";

import SetList from "../setList/SetList";
import { useMod } from "../../hooks/useMod";
import { useQueryParams } from "../../hooks/useQueryParams";

import ListItemMenuModal from "../workoutList/ListItemMenuModal";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";
import { useMenu } from "../../hooks/useMenu";
interface Props {
  exerciseDto: ExerciseDto;
}
const ExerciseListItem = React.memo(({ exerciseDto }: Props) => {
  console.log("ExercisePage rerendered");
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useMod();
  const { setQueryParams } = useQueryParams();

  const handleOpenDeleteModalClick = useCallback(() => {
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("DELETE_EXERCISE", exerciseDto);
  }, [openModal, showOpenMenuById, setQueryParams, exerciseDto]);

  const handleOpenUpdateModalClick = useCallback(() => {
    //showOpenMenuById(-1);
    //setQueryParams({ exerciseId: exerciseDto.id });
    //openModal("UPDATE_EXERCISE", exerciseDto);
  }, [openModal, showOpenMenuById, setQueryParams, exerciseDto]);

  return (
    <li className="text-white text-[1.7rem] w-full px-[1rem]">
      <div className="flex justify-between items-center">
        <div>{exerciseDto.name}</div>

        <div>
          {openMenuId === exerciseDto.id && (
            <ListItemMenuModal
              handleOpenUpdateModalClick={handleOpenUpdateModalClick}
              handleOpenDeleteModalClick={handleOpenDeleteModalClick}
            />
          )}
          <ListItemOptionsButton
            showMenu={showOpenMenuById}
            id={exerciseDto.id}
          />
        </div>
      </div>

      {exerciseDto.sets && exerciseDto.sets.length > 0 && (
        <SetList sets={exerciseDto.sets} />
      )}
    </li>
  );
});

export default ExerciseListItem;
