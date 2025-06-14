import type { ExerciseFormSchema } from "../schemas/exerciseFormSchema";
import type { LoginFormSchema } from "../schemas/loginFormSchema";
import type { SetFormSchema } from "../schemas/setFormSchema";
import type { UpdateUserEmailFormSchema } from "../schemas/updateUserEmailFormSchema";
import type { UpdateUserPasswordFormSchema } from "../schemas/updateUserPasswordFormSchema";
import type { UserCredentialsFormSchema } from "../schemas/userCredentialsSchema";
import type { WorkoutFormSchema } from "../schemas/workoutFormSchema";

export type LoginFormFieldsType = {
  name: keyof LoginFormSchema;
  label: string;
  type: string;
};

export type UserCredentialsFormFieldsType = {
  name: keyof UserCredentialsFormSchema;
  label: string;
  type: string;
};

export type UpdateUserPasswordFormFieldsType = {
  name: keyof UpdateUserPasswordFormSchema;
  label: string;
  type: string;
};

export type UpdateUserEmailFormFieldsType = {
  name: keyof UpdateUserEmailFormSchema;
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
