import * as z from "zod";
import {
  FIELD_NOT_EMPTY_MSG,
  MUST_BE_NUMBER_MSG,
} from "../constants/errorMsgs";
import type { SetInput } from "../types/inputTypes";
export const SetFormSchema = z.object({
  weight: z.number({
    required_error: FIELD_NOT_EMPTY_MSG,
    invalid_type_error: MUST_BE_NUMBER_MSG,
  }),
  reps: z.number({
    required_error: FIELD_NOT_EMPTY_MSG,
    invalid_type_error: MUST_BE_NUMBER_MSG,
  }),
  exerciseId: z.number(),
});

export function isSetInput(data: unknown): data is SetInput {
  return SetFormSchema.safeParse(data).success;
}

export type SetFormSchema = z.infer<typeof SetFormSchema>;
