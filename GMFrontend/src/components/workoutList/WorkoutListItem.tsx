import React from "react";
import type Workout from "../../models/workout";
import WorkoutListItemDetails from "./WorkoutListItemDetails";
import WorkoutListItemOptionsButton from "./WorkoutListItemOptionsButton";
interface Props {
  workout: Workout;
}
const WorkoutListItem = ({ workout }: Props) => {
  return (
    <>
      <li className="w-[100%] pb-2">
        <div className=" border-l-8 border-[#99ff00] text-text  bg-background hover:shadow-lg hover:scale-96 transition-all duration-300 hover:text-primary">
          <div className="flex justify-between items-baseline">
            <WorkoutListItemDetails workout={workout} />
            <WorkoutListItemOptionsButton />
          </div>
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;
