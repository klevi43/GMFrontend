import React from "react";
import workoutService from "../services/workoutService";

const WorkoutDashboard = () => {
  const res = workoutService.getMostRecentWorkouts();
  console.log(res);
  return (
    <div>
      <p></p>
    </div>
  );
};

export default WorkoutDashboard;
