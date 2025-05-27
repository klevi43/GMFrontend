import React from "react";
import type ExerciseDto from "../../dtos/exerciseDto";

import SetList from "../setList/SetList";
import ListItemMenuModal from "../workoutList/ListItemMenuModal";
import { useMenu } from "../../hooks/useMenu";
import ListItemOptionsButton from "../workoutList/ListItemOptionsButton";
import MenuWrapper from "../uiBehaviorWrapper/MenuWrapper";
import type { ExerciseInput } from "../../types/inputTypes";
interface Props {
  exercise: ExerciseDto;
}
const ExerciseListItem = React.memo(({ exercise }: Props) => {
  console.log("ExercisePage rerendered");

  return (
    <li className="text-white text-[1.7rem] w-full px-[1rem]">
      <div className="flex justify-between items-center">
        <div>{exercise.name}</div>

        <div>
          <MenuWrapper id={exercise.id} dtoObj={exercise} />
        </div>
      </div>

      {exercise.sets && exercise.sets.length > 0 && (
        <SetList sets={exercise.sets} />
      )}
    </li>
  );
});

export default ExerciseListItem;
