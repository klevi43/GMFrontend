import React from "react";
import { useQueryParams } from "../../hooks/useQueryParams";
import type SetDto from "../../dtos/setDto";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";
import ListItemMenuModal from "../workoutList/ListItemMenuModal";
import { useMod } from "../../hooks/useMod";
import { useMenu } from "../../hooks/useMenu";
import { div } from "motion/react-client";
interface Props {
  col1: string | number;
  col2?: string;
  col3?: string;
  setDto?: SetDto;
  styles?: string;
}
const SetListItem = ({ col1, col2, col3, setDto, styles }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();
  const { setQueryParams } = useQueryParams();
  const { openModal } = useMod();

  const handleOpenUpdateModalClick = () => {
    if (!setDto) throw new Error("No set data");
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: setDto.exerciseId, setId: setDto.id });
    openModal("UPDATE_SET", setDto);
  };
  const handleOpenDeleteModalClick = () => {
    if (!setDto) throw new Error("No set data");
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: setDto.exerciseId, setId: setDto.id });
    openModal("DELETE_SET", setDto);
  };
  return (
    <li className="flex justify-between items-center text-text">
      <div className="text-center">{col1}</div>
      <div className="text-center">{col2 ? col2 : setDto?.weight}</div>
      <div className="text-center">{col3 ? col3 : setDto?.reps}</div>
      {setDto && openMenuId === setDto?.id && (
        <div>
          <ListItemMenuModal
            handleOpenUpdateModalClick={handleOpenUpdateModalClick}
            handleOpenDeleteModalClick={handleOpenDeleteModalClick}
          />
        </div>
      )}
      {setDto ? (
        <ListItemOptionsButton id={setDto.id} showMenu={showOpenMenuById} />
      ) : (
        <div></div>
      )}
    </li>
  );
};

export default SetListItem;
