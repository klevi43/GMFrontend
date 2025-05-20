import * as z from "zod";
import { FIELD_NOT_EMPTY_MSG } from "../constants/formErrorMsgs";

export const AddWorkoutFormSchema = z.object({
  name: z.string().nonempty(FIELD_NOT_EMPTY_MSG),
  date: z
    .date()
    .refine(
      (val) =>
        !isNaN(val.getFullYear()) &&
        !isNaN(val.getMonth()) &&
        !isNaN(val.getDate()),

      {
        message: "Invalid date. Enter numbers only",
      }
    )
    .refine(
      (val) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        val.setHours(0, 0, 0, 0);

        return val <= today;
      },
      { message: "Date cannot be in the future" }
    ),
});

export type AddWorkoutFormSchema = z.infer<typeof AddWorkoutFormSchema>;
