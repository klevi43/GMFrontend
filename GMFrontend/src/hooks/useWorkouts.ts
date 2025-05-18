import { useContext } from "react";
import WorkoutsContext from "../contexts/WorkoutProvider";

export const useWorkouts = () => {
  return useContext(WorkoutsContext);
};
