import { useGetCurrentWorkouts } from "../../hooks/workoutHooks/useGetCurrentWorkouts";
import React from "react";
import WorkoutListItem from "./WorkoutListItem";
import InfoMessage from "../messages/InfoMessage";
import ErrorMessage from "../messages/ErrorMessage";
import type WorkoutDto from "../../dtos/workoutDto";
import type { UseQueryResult } from "@tanstack/react-query";

interface Props {
  workoutDtos: WorkoutDto[];
}
const WorkoutList = React.memo(({ workoutDtos }: Props) => {
  console.log("render");

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
