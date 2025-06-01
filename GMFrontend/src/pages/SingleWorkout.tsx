import React, { useEffect, useMemo } from "react";
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
import { useQueryParams } from "../hooks/useQueryParams";
import { getWorkoutId } from "../utils/QueryParamHelpers";

const SingleWorkout = () => {
  const { queryParams, setQueryParams } = useQueryParams();
  const [searchParams] = useSearchParams();
  const workoutId = Number(searchParams.get("workoutId"));
  const { data: workoutDto, error, isLoading } = useGetWorkout(workoutId);
  useEffect(() => {
    setQueryParams({ workoutId: workoutId });
  }, []);
  const { openModal } = useMod();

  if (!workoutDto)
    return <ErrorMessage fontSize="text-[4rem]" message="No workout found" />;
  return (
    <div className="max-w-[1050px] mx-auto">
      <Nav />
      <div className="w-[90%] pb-[1.5rem] mx-auto border-2 bg-modal border-modal-outline rounded-4xl">
        <div className="w-[100%]  mx-auto max-w-[1050px] mb-4 pl-[1rem]">
          {workoutDto && (
            <Title title={workoutDto.name} styles="text-start text-[3rem]" />
          )}
        </div>
        <div className="w-[98%] mx-auto max-w-[800px] px-[1rem]">
          {workoutDto.exerciseDtos && workoutDto.exerciseDtos.length > 0 ? (
            <ExerciseList exerciseDtos={workoutDto.exerciseDtos} />
          ) : (
            <p className="text-text text-center text-[2rem]">
              No Exercises to show
            </p>
          )}
          <ShowElementButton
            styles="text-[2rem] py-2 bg-primary w-full rounded-full hover:scale-102"
            content="Add Exercise"
            showElement={() => openModal("ADD_EXERCISE")}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleWorkout;
