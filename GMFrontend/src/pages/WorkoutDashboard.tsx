import React, { useEffect, useState } from "react";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import AddWorkoutFormModal from "../components/modals/AddWorkoutFormModal";
import ShowElementButton from "../components/buttons/ShowElementButton";
import { useModal } from "../hooks/useModal";
import { ADD_TYPE } from "../constants/modalConstants";
import Title from "../components/form/Title";
const WorkoutDashboard = () => {
  const { openModal } = useModal();

  return (
    <div>
      <Nav />
      <h2 className="mx-auto text-white">Workout Dashboard</h2>

      <div className="w-[90%] mx-auto">
        <div className=" flex justify-between items-baseline">
          <Title title="Workout Dashboard" styles="text-[3rem]" />
          <ShowElementButton
            styles="text-[3.5rem]"
            content="+"
            showElement={() => openModal(ADD_TYPE, null)}
          />
        </div>
      </div>
      <WorkoutList />
    </div>
  );
};

export default WorkoutDashboard;
