import { createContext, useState } from "react";
import type WorkoutDto from "../models/workout";
import type { WorkoutContextType } from "../types/workoutContextType";

interface Props {
  children: React.ReactNode;
}

const workoutArr: WorkoutDto[] = [];

const WorkoutsContext = createContext<WorkoutContextType>({
  workouts: workoutArr,
  setWorkouts: () => {},
});

export const WorkoutsProvider = ({ children }: Props) => {
  const [workouts, setWorkouts] = useState<WorkoutDto[]>(workoutArr);
  return (
    <WorkoutsContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsContext;
