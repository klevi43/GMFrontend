export type LoginInput = {
  email: string;
  password: string;
};

export type UserCredentialsInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

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
