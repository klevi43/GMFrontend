import * as z from "zod";
import { FIELD_NOT_EMPTY_MSG } from "../constants/errorMsgs";
import type { WorkoutInput } from "../types/inputTypes";
import { capitalizeEachFirstLetter } from "../utils/capitalizeFirstLetterHelper";

export const WorkoutFormSchema = z.object({
  name: z
    .string()
    .nonempty(FIELD_NOT_EMPTY_MSG)
    .max(50, {
      message: "A workout's name can only be up to 50 characters.",
    })
    .transform((name) => capitalizeEachFirstLetter(name)),
  date: z.date().refine(
    (input) => {
      const now = new Date();
      return input <= now;
    },
    {
      message: "Date cannot be in the future",
    }
  ),
  // date: z
  //   .string()
  //   .refine((input) => !isNaN(Date.parse(input)), {
  //     message: "Invalid date format",
  //   })
  //   .transform((input) => {
  //     const date = new Date(input);
  //     return date.toISOString().split("T")[0];
  //   })
  //   // input fn param. Once it is transformed, it gets passed down to the next
  //   .refine(
  //     (dateStr) => {
  //       const now = new Date();
  //       return new Date(dateStr) <= now;
  //     },
  //     {
  //       message: "Date cannot be in the future",
  //     }
  //   ),
});

export function isWorkoutInput(data: unknown): data is WorkoutInput {
  return WorkoutFormSchema.safeParse(data).success;
}

export type WorkoutFormSchema = z.infer<typeof WorkoutFormSchema>;
