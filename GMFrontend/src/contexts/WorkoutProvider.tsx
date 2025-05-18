import { createContext, useState } from "react";
import type Workout from "../models/workout";
import type { WorkoutContextType } from "../types/workoutContextType";

interface Props {
  children: React.ReactNode;
}

const workoutArr: Workout[] = [];

const WorkoutsContext = createContext<WorkoutContextType>({
  workouts: workoutArr,
  setWorkouts: () => {},
});

export const WorkoutsProvider = ({ children }: Props) => {
  const [workouts, setWorkouts] = useState<Workout[]>(workoutArr);
  return (
    <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsContext;
