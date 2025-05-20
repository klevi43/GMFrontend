import type { AddWorkoutFormSchema } from "../schemas/addWorkoutFormSchema";

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

export type AddWorkoutFormFieldsType = {
  name: keyof AddWorkoutFormSchema;
  label: string;
  type: string;
};
