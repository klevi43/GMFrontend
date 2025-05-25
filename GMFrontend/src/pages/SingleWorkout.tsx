import React from "react";
import Nav from "../components/navbar/Nav";
import Title from "../components/form/Title";
import type Exercise from "../models/exercise";
import type Set from "../models/set";
import { li, p } from "motion/react-client";
import ShowElementButton from "../components/buttons/ShowElementButton";
import { useGetWorkout } from "../hooks/workoutHooks/useGetWorkout";
import { useSearchParams } from "react-router";
import SetListItem from "../components/setList/setListItem";
import ExerciseList from "../components/exerciseList/ExerciseList";
import ErrorMessage from "../components/messages/ErrorMessage";
const set: Set = {
  id: 1,
  weight: 15,
  reps: 12,
};
const exercise: Exercise = {
  id: 0,
  name: "Exercise",
  sets: [set, set],
};
const exercises = [exercise, exercise, exercise];
const SingleWorkout = () => {
  const [searchParams] = useSearchParams();
  const workoutId = Number(searchParams.get("workoutId"));
  const { data: workout, error, isLoading } = useGetWorkout(workoutId);
  console.log(workoutId);
  console.log(workout);
  if (!workout)
    return <ErrorMessage fontSize="text-[4rem]" message="No workout found" />;
  return (
    <div className="max-w-[1150px] mx-auto">
      <Nav />
      <div className="w-[90%] mx-auto max-w-[1000px] px-[1rem]">
        {workout && (
          <Title title={workout.name} styles="text-start text-[3rem]" />
        )}
      </div>
      <div className="w-[98%] mx-auto max-w-[1150px] px-[1rem]">
        {workout.exercises && workout.exercises.length > 0 ? (
          <ExerciseList exercises={workout.exercises} />
        ) : (
          <p className="text-text text-center text-[2rem]">
            No Exercises to show
          </p>
        )}
        <ShowElementButton
          styles="text-[2rem] py-2 bg-primary w-full rounded-full"
          content="Add Exercise"
          showElement={() => {}}
        />
      </div>
    </div>
  );
};

export default SingleWorkout;
