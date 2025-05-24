import React from "react";
import type Workout from "../../models/workout";
interface Props {
  workout: Workout;
}
const WorkoutListItem = ({ workout }: Props) => {
  return (
    <>
      <li className="w-[100%] pb-2" key={workout.id}>
        <div className=" border-l-8 border-[#99ff00] text-text  bg-background hover:shadow-lg hover:scale-96 transition-all duration-300 hover:text-primary">
          <div className="flex justify-between items-baseline">
            <div className="flex items-baseline px-3 py-[1.5rem]">
              <div className="">
                <span className="font-bold  text-[2rem]">{workout.name}</span>
              </div>
              <div className="text-[2rem] px-2"> | </div>
              <div>
                <div className=" text-end text-[1.2rem]">{workout.date}</div>
              </div>
            </div>
            <div className="pr-[1.5rem] ">
              <button className="text-text text-[3rem] hover:text-white transition duration-300 cursor-pointer">
                ...
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;
