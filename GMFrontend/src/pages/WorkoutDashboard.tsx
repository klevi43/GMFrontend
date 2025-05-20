import React, { useEffect } from "react";
import workoutService from "../services/workoutService";
import { useQuery } from "@tanstack/react-query";
import type Workout from "../models/workout";
import type Exercise from "../models/exercise";
import type Set from "../models/set";
import Nav from "../components/navbar/Nav";
import ModalContainer from "../components/containers/ModalContainer";
import LoginForm from "../components/form/loginForm/LoginForm";
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

  // const {
  //   data: workouts,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["workouts"],
  //   queryFn: workoutService.getMostRecentWorkouts,
  // });
  return (
    <div>
      <Nav />
      <h2 className="text-white">Workout Dashboard</h2>
      <ModalContainer></ModalContainer>
      <div className="w-[90%] mx-auto">
        <div className="text-text text-end text-[4rem]">+</div>
      </div>
      <div>
        <ul className="w-[100%]">
          <li className="w-[100%] pb-2">
            <div className="border-2 border-modal-outline w-[90%] mx-auto">
              <div className="flex justify-between items-center px-3 pt-[1.5rem] pb-[1.5rem]">
                <div>
                  <span className="font-bold text-text text-[2rem]">
                    Chest Day
                  </span>
                </div>
                <div>
                  <div className="text-text text-end">Last completed:</div>
                  <div className="text-text text-end">05/20/2025</div>
                </div>
              </div>
            </div>
          </li>

          <li className="w-[100%] pb-2">
            <div className="border-2 border-modal-outline w-[90%] mx-auto">
              <div className="flex items-baseline px-3 py-[1.5rem]">
                <div>
                  <span className="font-bold text-text text-[2rem]">
                    Chest Day
                  </span>
                </div>
                <div className="text-text text-[2rem] px-2"> | </div>
                <div>
                  <div className="text-text text-end text-[1.2rem]">
                    05/20/2025
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="w-[100%] pb-2">
            <div className="border-2 border-modal-outline w-[90%] mx-auto">
              <div className="flex justify-between items-baseline px-3 py-[1.5rem]">
                <div>
                  <span className="font-bold text-text text-[2rem]">
                    Chest Day
                  </span>
                </div>
                <div className="pl-[0.7rem]">
                  <div className="text-text text-end text-[1.2rem]">
                    05/20/2025
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="w-[100%]">
            <div className="border-2 border-modal-outline w-[90%] mx-auto">
              <div className="flex items-baseline px-3 py-[1.5rem]">
                <div>
                  <span className="font-bold text-text text-[2rem]">
                    Chest Day
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="max-w-[1150px] mx-auto flex justify-center">
        <ul className="grid grid-cols-2 place-items-center mb-[4rem] md:w-full">
          <li>
            <div className="group relative m-4 border-1 border-modal-outline min-w-[150px] min-h-[150px] max-w-[250px] max-h-[250px] aspect-square rounded-3xl bg-modal text-white bg-gradient-to-br hover:from-[#99ff00] hover:to-[#00cc81] hover:text-background transform hover:scale-130 transition-all duration-400 ">
              <div className="flex flex-col justify-center items-center h-full w-full ">
                <h3 className=" p-2 text-[2rem] text-center ">Chest Day</h3>
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-[#333333] text-white to-[#141414] rounded-full px-4 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
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
