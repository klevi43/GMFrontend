import React, { useEffect } from "react";
import workoutService from "../services/workoutService";
import { useQuery } from "@tanstack/react-query";
const WorkoutDashboard = () => {
  const {
    data: workouts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["workouts"],
    queryFn: workoutService.getMostRecentWorkouts,
  });
  return (
    <div>
      <h2 className="text-white">Workout Dashboard</h2>
      {workouts && workouts.length > 0 ? (
        <ul>
          {workouts.map((w) => (
            <li className="text-white" key={w.id}>
              {w.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts found.</p>
      )}
    </div>
  );
};

export default WorkoutDashboard;
