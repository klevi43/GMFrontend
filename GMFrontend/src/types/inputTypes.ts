export type WorkoutInput = {
  name: string;
  date: string;
};

export type ExerciseInput = {
  name: string;
  workoutId: number;
};

export type UpdateExerciseInput = ExerciseInput &
  WorkoutQueryParam &
  ExerciseQueryParam;

export type QueryParams = {
  workoutId: number;
  exerciseId: number;
};

type WorkoutQueryParam = {
  workoutId: number;
};

type ExerciseQueryParam = {
  exerciseId: number;
};
export type SetInput = {
  weight: number;
  reps: number;
};
