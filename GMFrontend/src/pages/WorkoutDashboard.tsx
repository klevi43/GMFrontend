import React, { useEffect, useState } from "react";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import AddWorkoutFormModal from "../components/modals/AddWorkoutFormModal";
import ShowElementButton from "../components/buttons/ShowElementButton";
import { useModal } from "../hooks/useModal";
import { ADD_TYPE } from "../constants/modalConstants";
const WorkoutDashboard = () => {
  const [addWorkoutModalIsVisible, setAddWorkoutModalIsVisible] =
    useState(false);
  const showAddWorkoutFormModal = () => {
    console.log(addWorkoutModalIsVisible);
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
  };
  const { openModal } = useModal();

  return (
    <div>
      <Nav />
      <h2 className="mx-auto text-white">Workout Dashboard</h2>

      <div className="w-[90%] mx-auto">
        <div className=" text-end">
          <ShowElementButton
            styles="text-[4rem]"
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
