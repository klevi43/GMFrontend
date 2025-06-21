export type LoginInput = {
  email: string;
  password: string;
};

export type UserCredentialsInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type PasswordInput = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type EmailInput = {
  currentEmail: string;
  newEmail: string;
  password: string;
};

export type WorkoutInput = {
  name: string;
  date: Date;
};

export type ExerciseInput = {
  name: string;
  workoutId: number;
};

export type SetInput = {
  weight?: number;
  reps?: number;
  exerciseId: number;
};
