import type { ExerciseFormSchema } from "../schemas/exerciseFormSchema";
import type { SetFormSchema } from "../schemas/setFormSchema";
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

export type UpdateUserPasswordFormFieldsType = {
  name: "currentPassword" | "newPassword" | "confirmNewPassword";
  label: string;
  type: string;
};

export type UpdateUserEmailFormFieldsType = {
  name: "currentEmail" | "newEmail" | "password";
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

export type SetFormFieldsType = {
  name: keyof SetFormSchema;
  label: string;
};
