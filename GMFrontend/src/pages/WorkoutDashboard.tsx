import React, { useEffect, useState } from "react";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import AddWorkoutFormModal from "../components/modals/AddWorkoutFormModal";
import ShowElementButton from "../components/buttons/ShowElementButton";
const WorkoutDashboard = () => {
  const [addWorkoutModalIsVisible, setAddWorkoutModalIsVisible] =
    useState(false);
  const showAddWorkoutFormModal = () => {
    console.log(addWorkoutModalIsVisible);
    setAddWorkoutModalIsVisible(!addWorkoutModalIsVisible);
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
