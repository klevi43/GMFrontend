import React, { useEffect, useState } from "react";
import workoutService from "../services/workoutService";
import { useQuery } from "@tanstack/react-query";
import type Workout from "../models/workout";
import type Exercise from "../models/exercise";
import type Set from "../models/set";
import Nav from "../components/navbar/Nav";
import ModalContainer from "../components/containers/ModalContainer";
import AddWorkoutForm from "../components/form/addWorkoutForm/addWorkoutForm";
import type { AddWorkoutFormSchema } from "../schemas/addWorkoutFormSchema";
import type { SubmitHandler } from "react-hook-form";
import { useServerError } from "../hooks/useServerError";
import FormContainer from "../components/containers/FormContainer";
import TrashcanButton from "../components/icons/TrashcanButton";
import EditButton from "../components/icons/EditButton";
import { useAddWorkout } from "../hooks/workoutHooks/useAddWorkout";
import type { WorkoutInput } from "../types/inputTypes";
import WorkoutList from "../components/workoutList/WorkoutList";
import WorkoutListItem from "../components/workoutList/WorkoutListItem";
import { useGetCurrentWorkouts } from "../hooks/workoutHooks/useGetCurrentWorkouts";
import AddWorkoutFormModal from "../components/modals/AddWorkoutFormModal";
import ShowElementButton from "../components/buttons/ShowElementButton";
const WorkoutDashboard = () => {
  const mutation = useAddWorkout();
  // const workouts: Workout[] = [workout, workout, workout];
  const [addWorkoutModalIsVisible, setAddWorkoutModalIsVisible] =
    useState(false);
  const showAddWorkoutFormModal = () => {
    console.log(addWorkoutModalIsVisible);
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
  };
  // const { serverError, setServerError } = useServerError();
  const onSubmit: SubmitHandler<AddWorkoutFormSchema> = (
    data: WorkoutInput
  ) => {
    //console.log(JSON.stringify(data));
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
    mutation.mutate(data);
  };
  return (
    <div>
      <Nav />
      <h2 className="mx-auto text-white">Workout Dashboard</h2>
      {addWorkoutModalIsVisible && (
        <AddWorkoutFormModal
          showAddWorkoutFormModal={showAddWorkoutFormModal}
        />
      )}

      <div className="w-[90%] mx-auto">
        <div className=" text-end">
          <ShowElementButton
            styles="text-[4rem]"
            content="+"
            showElement={showAddWorkoutFormModal}
          />
        </div>
      </div>
      <WorkoutList />
    </div>
  );
};

export default WorkoutDashboard;
