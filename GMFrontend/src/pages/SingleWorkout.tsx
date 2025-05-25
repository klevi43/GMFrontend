import React from "react";
import Nav from "../components/navbar/Nav";
import Title from "../components/form/Title";
import type Exercise from "../models/exercise";
import type Set from "../models/set";
import { li } from "motion/react-client";
import ShowElementButton from "../components/buttons/ShowElementButton";
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
  return (
    <div className="max-w-[1150px] mx-auto">
      <Nav />
      <div className="w-[90%] mx-auto max-w-[1000px] px-[1rem]">
        <Title title="Chest Day" styles="text-start text-[3rem]" />
      </div>
      <div className="w-[98%] mx-auto max-w-[1150px] px-[1rem]">
        <ul className="mb-4">
          {exercises.map((exercise) => (
            <li className="text-white text-[1.7rem] w-full px-[1rem]">
              {exercise.name}
              <ul className="">
                <li className="grid grid-cols-4 gap-4 text-text w-full">
                  <div className="text-center">No</div>
                  <div className="text-center">Weight</div>
                  <div className="text-center">Reps</div>
                  <div className="text-center"></div>
                </li>
                {exercise.sets?.map((set) => (
                  <li className="grid grid-cols-4 gap-4 text-text">
                    <div className="text-center">0</div>
                    <div className="text-center">{set.reps}</div>
                    <div className="text-center">{set.weight}</div>
                    <div className="text-center">...</div>
                  </li>
                ))}
                <ShowElementButton
                  styles="text-primary text-[1.5rem] bg-background border-2 border-primary py-2 w-full rounded-full"
                  content="Add Set"
                  showElement={() => {}}
                />
              </ul>
            </li>
          ))}
        </ul>
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
