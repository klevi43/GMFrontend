import * as z from "zod";
import { FIELD_NOT_EMPTY_MSG } from "../constants/errorMsgs";
import type { ExerciseInput } from "../types/inputTypes";

export const ExerciseFormSchema = z.object({
  name: z.string().nonempty(FIELD_NOT_EMPTY_MSG),
  workoutId: z.number(),
});

export function isExerciseInput(data: unknown): data is ExerciseInput {
  console.log(ExerciseFormSchema.safeParse(data).success);
  return ExerciseFormSchema.safeParse(data).success;
}

export type ExerciseFormSchema = z.infer<typeof ExerciseFormSchema>;
