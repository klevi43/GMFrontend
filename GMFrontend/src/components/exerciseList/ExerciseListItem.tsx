import React from "react";
import type Exercise from "../../models/exercise";
import SetListItem from "../setList/setListItem";
import ShowElementButton from "../buttons/ShowElementButton";
import SetList from "../setList/SetList";
interface Props {
  exercise: Exercise;
}
const ExerciseListItem = ({ exercise }: Props) => {
  return (
    <li className="text-white text-[1.7rem] w-full px-[1rem]">
      {exercise.name}
      {exercise.sets && exercise.sets.length > 0 && (
        <SetList sets={exercise.sets} />
      )}
      {/* <ul className="">
                    <SetListItem col1="No" col2="Weight" col3="Reps" col4="" />
                    {exercise.sets?.map((set, index) => (
                      <SetListItem
                        key={index}
                        col1={index + 1}
                        col2={set.weight}
                        col3={set.reps}
                        col4="..."
                      />
                    ))}
                    <ShowElementButton
                      styles="text-primary text-[1.5rem] bg-background border-2 border-primary py-2 w-full rounded-full"
                      content="Add Set"
                      showElement={() => {}}
                    />
                  </ul> */}
    </li>
  );
};

export default ExerciseListItem;
