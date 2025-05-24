import * as z from "zod";
import { FIELD_NOT_EMPTY_MSG } from "../constants/formErrorMsgs";

export const AddWorkoutFormSchema = z.object({
  name: z.string().nonempty(FIELD_NOT_EMPTY_MSG),
  date: z
    .string()
    .refine((input) => !isNaN(Date.parse(input)), {
      message: "Invalid date format",
    })
    .transform((input) => {
      const date = new Date(input);
      return date.toISOString().split("T")[0];
    })
    // input fn param. Once it is transformed, it gets passed down to the next
    .refine(
      (dateStr) => {
        const now = new Date();
        return new Date(dateStr) <= now;
      },
      {
        message: "Date cannot be in the future",
      }
    ),
});

export type AddWorkoutFormSchema = z.infer<typeof AddWorkoutFormSchema>;
