import type WorkoutDto from "../models/workout";

export type WorkoutContextType = {
  workouts: WorkoutDto[];
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutDto[]>>;
};
