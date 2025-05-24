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
const WorkoutDashboard = () => {
  const set: Set = {
    id: 20,
    weight: 20,
    reps: 5,
  };
  const exercise: Exercise = {
    id: 10,
    name: "Bench Press",
    sets: [set, set],
  };
  const workout: Workout = {
    id: 0,
    name: "Chest Day",
    date: "2025-05-19",
    exercises: [exercise, exercise],
  };
  const mutation = useAddWorkout();
  const workouts: Workout[] = [workout, workout, workout];
  const [addWorkoutModalIsVisible, setAddWorkoutModalIsVisible] =
    useState(false);

  const showAddWorkoutFormModal = () => {
    console.log(addWorkoutModalIsVisible);
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
  };

  const { serverError, setServerError } = useServerError();
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
      <h2 className="text-white">Workout Dashboard</h2>
      {addWorkoutModalIsVisible && (
        <ModalContainer>
          <FormContainer>
            <AddWorkoutForm
              showForm={showAddWorkoutFormModal}
              onSubmit={onSubmit}
              title="Add Workout"
              defaultValues={{ name: "", date: new Date() }}
              fields={[
                { name: "name", label: "Workout Name", type: "text" },
                { name: "date", label: "Date completed", type: "date" },
              ]}
              serverError={serverError}
            />
          </FormContainer>
        </ModalContainer>
      )}

      <div className="w-[90%] mx-auto">
        <div className=" text-end">
          <button
            className="text-text text-[4rem] hover:text-white transition-all duration-300 cursor-pointer"
            onClick={showAddWorkoutFormModal}
          >
            +
          </button>
        </div>
      </div>

      <WorkoutList>
        {workouts.map((w) => (
          <WorkoutListItem workout={w} />
        ))}
      </WorkoutList>

      {/* {workouts && workouts.length > 0 ? (
        <ul>
          {workouts.map((w) => (
            <div>
              <li className="flex justify-center" key={w.id}>
                <div className="flex flex-col w-[40%] border-1 border-pink-400 rounded-t-2xl overflow-hidden">
                  <div className="flex justify-center font-bold text-[2rem] p-5 bg-primary overflow-hidden">
                    <span>{w.name}</span>
                  </div>
                  <div className="flex justify-between text-text">
                    <span>
                      Last date completed: {w.date?.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No workouts found.</p>
      )} */}
    </div>
  );
};

export default WorkoutDashboard;
