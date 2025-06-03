import { useGetCurrentWorkouts } from "../../hooks/workoutHooks/useGetCurrentWorkouts";
import React from "react";
import WorkoutListItem from "./WorkoutListItem";
import InfoMessage from "../messages/InfoMessage";
import ErrorMessage from "../messages/ErrorMessage";
import type WorkoutDto from "../../dtos/workoutDto";
import type { UseQueryResult } from "@tanstack/react-query";

interface Props {
  useWorkoutQuery: () => UseQueryResult<T, any>;
}
const WorkoutList = React.memo(<T,>({ useWorkoutQuery }: Props) => {
  //const { data: workouts, error, isLoading } = useGetCurrentWorkouts();
  const { data: workouts, error, isLoading } = useWorkoutQuery();

  console.log("render");

  return (
    <div>
      {isLoading && (
        <InfoMessage fontSize="[2rem]" message="Loading workouts..." />
      )}
      {error && <ErrorMessage message={error.message} fontSize="[2rem]" />}

      <ul className="w-[100%] pr-[0.2rem] mx-auto">
        {workouts
          ? workouts?.map((workout: WorkoutDto) => (
              <WorkoutListItem key={workout.id} workoutDto={workout} />
            ))
          : !isLoading &&
            !error && (
              <p className="text-text  text-center text-[2rem]">
                No workouts to show
              </p>
            )}
      </ul>
    </div>
  );
});

export default WorkoutList;
