import React, { useEffect, useState } from "react";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import AddWorkoutFormModal from "../components/modals/workoutModals/AddWorkoutFormModal";
import ShowElementButton from "../components/buttons/ShowElementButton";
import { useModal } from "../hooks/useModal";
import { ADD_TYPE } from "../constants/modalConstants";
import Title from "../components/form/Title";
import type { WorkoutInput } from "../types/inputTypes";
import { useMod } from "../hooks/useMod";
const WorkoutDashboard = () => {
  const obj = useMod();

  const emptyWorkoutInput: WorkoutInput = {
    name: "Untitled Workout",
    date: new Date().toISOString().split("T")[0],
  };
  return (
    <div>
      <Nav />
      <h2 className="mx-auto text-white">Workout Dashboard</h2>

      <div className="max-w-{1000px] w-[90%] mx-auto">
        <div className=" flex justify-between items-baseline">
          <Title title="Workout Dashboard" styles="text-[3rem]" />
          <ShowElementButton
            styles="text-[3.5rem] text-text hover:text-white"
            content="+"
            showElement={() =>
              openModal(ADD_TYPE, emptyWorkoutInput, null, null)
            }
          />
        </div>
      </div>
      <WorkoutList />
    </div>
  );
};

export default WorkoutDashboard;
