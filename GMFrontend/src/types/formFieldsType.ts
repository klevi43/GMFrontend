import type { ExerciseFormSchema } from "../schemas/exerciseFormSchema";
import type { WorkoutFormSchema } from "../schemas/workoutFormSchema";

export type LoginFormFieldsType = {
  name: "email" | "password";
  label: string;
  type: string;
};

export type RegisterFormFieldsType = {
  name: "email" | "password" | "confirmPassword";
  label: string;
  type: string;
};

export type WorkoutFormFieldsType = {
  name: keyof WorkoutFormSchema;
  label: string;
  type: string;
};

export type ExerciseFormFieldsType = {
  name: keyof ExerciseFormSchema;
  label: string;
  type: string;
};
