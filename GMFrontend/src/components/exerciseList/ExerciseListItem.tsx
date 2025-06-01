import React, { useCallback } from "react";
import type ExerciseDto from "../../dtos/exerciseDto";

import SetList from "../setList/SetList";
import { useMod } from "../../hooks/useMod";
import { useQueryParams } from "../../hooks/useQueryParams";

import ListItemMenuModal from "../workoutList/ListItemMenuModal";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";
import { useMenu } from "../../hooks/useMenu";
import { p } from "motion/react-client";
import ShowElementButton from "../buttons/ShowElementButton";
interface Props {
  exerciseDto: ExerciseDto;
}
const ExerciseListItem = ({ exerciseDto }: Props) => {
  console.log("ExerciseListItem rerendered: " + exerciseDto.name);
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useMod();
  const { setQueryParams } = useQueryParams();

  const handleOpenDeleteModalClick = () => {
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("DELETE_EXERCISE", exerciseDto);
  };

  const handleOpenUpdateModalClick = () => {
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("UPDATE_EXERCISE", exerciseDto);
  };

  const handleAddSetButtonClick = () => {
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("ADD_SET");
  };

  return (
    <li className="text-white text-[1.7rem] w-full px-[1rem]">
      <div className="flex justify-between items-center">
        <div>{exerciseDto.name}</div>

        <div className="relative">
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

      {exerciseDto.setDtos ? (
        <SetList setDtos={exerciseDto.setDtos} />
      ) : (
        <p className="text-text text-center">No sets to show</p>
      )}
      <ShowElementButton
        styles="text-primary text-[1.5rem] bg-background border-2 border-primary py-2 w-full rounded-full hover:scale-102"
        content="Add Set"
        showElement={handleAddSetButtonClick}
      />
    </li>
  );
};

export default ExerciseListItem;
