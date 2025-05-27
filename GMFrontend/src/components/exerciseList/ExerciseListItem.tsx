import React from "react";
import type ExerciseDto from "../../dtos/exerciseDto";

import SetList from "../setList/SetList";
import ListItemMenuModal from "../workoutList/ListItemMenuModal";
interface Props {
  exercise: ExerciseDto;
}
const ExerciseListItem = ({ exercise }: Props) => {
  const open = () => {
    console.log("clicked");
  };
  const close = () => {
    console.log("clicked");
  };
  return (
    <li className="text-white text-[1.7rem] w-full px-[1rem]">
      <div className="flex justify-between items-center">
        <div>{exercise.name}</div>
        <div>{}</div>
        <ListItemMenuModal
          handleOpenUpdateModalClick={open}
          handleOpenDeleteModalClick={close}
        />
      </div>

      {exercise.sets && exercise.sets.length > 0 && (
        <SetList sets={exercise.sets} />
      )}
    </li>
  );
};

export default ExerciseListItem;
