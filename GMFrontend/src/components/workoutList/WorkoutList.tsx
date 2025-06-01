import { useGetCurrentWorkouts } from "../../hooks/workoutHooks/useGetCurrentWorkouts";
import React from "react";
import WorkoutListItem from "./WorkoutListItem";
import InfoMessage from "../messages/InfoMessage";
import ErrorMessage from "../messages/ErrorMessage";

const WorkoutList = React.memo(() => {
  const { data: workouts, error, isLoading } = useGetCurrentWorkouts();
  console.log("render");

  return (
    <div>
      {isLoading && (
        <InfoMessage fontSize="[2rem]" message="Loading workouts..." />
      )}
      {error && <ErrorMessage message={error.message} fontSize="[2rem]" />}

      <ul className="w-[100%] max-w-[1150px] mx-auto">
        {workouts
          ? workouts?.map((workout) => (
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
