import type Workout from "../models/workout";

export type WorkoutContextType = {
  workouts: Workout[];
  setWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
};
