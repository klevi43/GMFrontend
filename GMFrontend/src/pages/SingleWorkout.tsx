import React from "react";
import Nav from "../components/navbar/Nav";
import Title from "../components/form/Title";

import ShowElementButton from "../components/buttons/ShowElementButton";
import { useGetWorkout } from "../hooks/workoutHooks/useGetWorkout";
import { useSearchParams } from "react-router";
import ExerciseList from "../components/exerciseList/ExerciseList";
import ErrorMessage from "../components/messages/ErrorMessage";

import { ADD_TYPE } from "../constants/modalConstants";
import type { ExerciseInput } from "../types/inputTypes";
import { Query } from "@tanstack/react-query";
import { useMod } from "../hooks/useMod";

const SingleWorkout = () => {
  const [searchParams] = useSearchParams();
  const workoutId = Number(searchParams.get("workoutId"));
  const { data: workout, error, isLoading } = useGetWorkout(workoutId);
  const emptyExerciseInput: ExerciseInput = {
    name: "Untitled Exercise",
    workoutId: -1,
  };
  const { openModal } = useMod();
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
        {workout.exerciseDtos && workout.exerciseDtos.length > 0 ? (
          <ExerciseList exercises={workout.exerciseDtos} />
        ) : (
          <p className="text-text text-center text-[2rem]">
            No Exercises to show
          </p>
        )}
        <ShowElementButton
          styles="text-[2rem] py-2 bg-primary w-full rounded-full"
          content="Add Exercise"
          showElement={() => openModal("ADD_EXERCISE")}
        />
      </div>
    </div>
  );
};

export default SingleWorkout;
