import React from "react";
import type Workout from "../../models/workout";
interface Props {
  workout: Workout;
}
const WorkoutListItemDetails = ({ workout }: Props) => {
  return (
    <>
      <div className="flex items-baseline px-3 py-[1.5rem]">
        <span className="font-bold  text-[2rem]">{workout.name}</span>
        <span className="text-[2rem] px-2"> | </span>
        <span className=" text-end text-[1.2rem]">{workout.date}</span>
      </div>
    </>
  );
};

export default WorkoutListItemDetails;
