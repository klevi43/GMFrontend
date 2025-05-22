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
    date: new Date(2025, 5, 19),
    exercises: [exercise, exercise],
  };

  const workouts: Workout[] = [workout, workout, workout];
  const [addWorkoutModalIsVisible, setAddWorkoutModalIsVisible] =
    useState(false);

  const showAddWorkoutFormModal = () => {
    console.log(addWorkoutModalIsVisible);
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
  };
  // const {
  //   data: workouts,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["workouts"],
  //   queryFn: workoutService.getMostRecentWorkouts,
  // });
  const { serverError, setServerError } = useServerError();
  const onSubmit: SubmitHandler<AddWorkoutFormSchema> = (data) => {
    console.log(JSON.stringify(data));
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
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
      <div className="mx-auto">
        {/* TODO: MAKE THIS INTO SEPARATE COMPONENTS */}
        <ul className="w-[100%] max-w-[1150px] mx-auto">
          <li className="w-[100%] pb-2">
            <div className=" border-l-8 border-[#99ff00] text-text  bg-background hover:shadow-lg hover:scale-105 transition-all duration-300 hover:text-primary">
              <div className="flex justify-between items-baseline">
                <div className="flex items-baseline px-3 py-[1.5rem]">
                  <div className="">
                    <span className="font-bold  text-[2rem]">Chest Day</span>
                  </div>
                  <div className="text-[2rem] px-2"> | </div>
                  <div>
                    <div className=" text-end text-[1.2rem]">05/20/2025</div>
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
          <li className="w-[100%] pb-2">
            <div className=" border-l-8 border-[#99ff00] text-text  bg-background hover:shadow-lg hover:scale-105 transition-all duration-300 hover:text-primary">
              <div className="flex justify-between items-baseline">
                <div className="flex items-baseline px-3 py-[1.5rem]">
                  <div className="">
                    <span className="font-bold  text-[2rem]">Chest Day</span>
                  </div>
                  <div className="text-[2rem] px-2"> | </div>
                  <div>
                    <div className=" text-end text-[1.2rem]">05/20/2025</div>
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
          <li className="w-[100%] pb-2">
            <div className=" border-l-8 border-[#99ff00] text-text  bg-background hover:shadow-lg hover:scale-105 transition-all duration-300 hover:text-primary">
              <div className="flex justify-between items-baseline">
                <div className="flex items-baseline px-3 py-[1.5rem]">
                  <div className="">
                    <span className="font-bold  text-[2rem]">Chest Day</span>
                  </div>
                  <div className="text-[2rem] px-2"> | </div>
                  <div>
                    <div className=" text-end text-[1.2rem]">05/20/2025</div>
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
        </ul>
      </div>

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
