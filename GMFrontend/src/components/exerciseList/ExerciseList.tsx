import React from "react";
import type ExerciseDto from "../../dtos/exerciseDto";
import ExerciseListItem from "./ExerciseListItem";
interface Props {
  exercises: ExerciseDto[];
}
const ExerciseList = ({ exercises }: Props) => {
  if (exercises.length == 0)
    return <p className="text-text">No exercises yet </p>;
  return (
    <>
      <ul className="mb-4">
        {exercises.map((exercise) => (
          <ExerciseListItem exercise={exercise} />
        ))}
      </ul>
    </>
  );
};

export default ExerciseList;
