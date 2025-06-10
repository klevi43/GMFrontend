import React from "react";
import type WorkoutDto from "../../dtos/workoutDto";
import WorkoutListItem from "./WorkoutListItem";

interface Props {
  workoutDtos: WorkoutDto[];
}
const WorkoutList = React.memo(({ workoutDtos }: Props) => {
  return (
    <div>
      <ul className="w-[100%] pr-[0.2rem] mx-auto">
        {workoutDtos &&
          workoutDtos?.map((workoutDto: WorkoutDto) => (
            <WorkoutListItem key={workoutDto.id} workoutDto={workoutDto} />
          ))}
      </ul>
    </div>
  );
});

export default WorkoutList;
