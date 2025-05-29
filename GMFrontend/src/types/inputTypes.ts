export type WorkoutInput = {
  name: string;
  date: string;
};

export type ExerciseInput = {
  name: string;
  workoutId: number;
};

export type UpdateExerciseInput = ExerciseInput & WorkoutQP & ExerciseQP;
export type WorkoutQueryParam = WorkoutQP;

export type QueryParams = {
  workoutId?: number;
  exerciseId?: number;
  setId?: number;
};

type WorkoutQP = {
  workoutId?: number;
};

type ExerciseQP = {
  exerciseId?: number;
};

type SetQP = {
  setId?: number;
};
export type SetInput = {
  weight: number;
  reps: number;
};
