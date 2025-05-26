import type WorkoutDto from "../dtos/workoutDto";

export type WorkoutContextType = {
  workouts: WorkoutDto[];
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutDto[]>>;
};
