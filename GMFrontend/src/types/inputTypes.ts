export type WorkoutInput = {
  name: string;
  date: string;
};

export type ExerciseInput = {
  name: string;
  workoutId: number;
};

export type UpdateExerciseInput = ExerciseInput & QueryParams;

export type QueryParams = {
  workoutId: number;
  exerciseId: number;
};
export type SetInput = {
  weight: number;
  reps: number;
};
