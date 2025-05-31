export type WorkoutInput = {
  name: string;
  date: string;
};

export type ExerciseInput = {
  name: string;
  workoutId: number;
};

export type SetInput = {
  weight: number;
  reps: number;
  exerciseId: number;
};
