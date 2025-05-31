import React from "react";
import type ExerciseDto from "../../dtos/exerciseDto";
import ExerciseListItem from "./ExerciseListItem";
interface Props {
  exerciseDtos: ExerciseDto[];
}
const ExerciseList = React.memo(({ exerciseDtos }: Props) => {
  if (exerciseDtos.length == 0)
    return <p className="text-text">No exercises yet </p>;
  return (
    <>
      <ul className="mb-4">
        {exerciseDtos.map((exerciseDto) => (
          <ExerciseListItem exerciseDto={exerciseDto} />
        ))}
      </ul>
    </>
  );
});

export default ExerciseList;
