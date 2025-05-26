import * as z from "zod";
import { FIELD_NOT_EMPTY_MSG } from "../constants/formErrorMsgs";

export const ExerciseFormSchema = z.object({
  name: z.string().nonempty(FIELD_NOT_EMPTY_MSG),
});

export type ExerciseFormSchema = z.infer<typeof ExerciseFormSchema>;
