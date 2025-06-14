import { z } from "zod";
import { MIN_LEN_8_MSG } from "../constants/errorMsgs";

export const UpdateUserEmailFormSchema = z.object({
  currentEmail: z.string().email(),
  newEmail: z.string().email(),
  password: z.string().min(8, {
    message: MIN_LEN_8_MSG,
  }),
});

export type UpdateUserEmailFormSchema = z.infer<
  typeof UpdateUserEmailFormSchema
>;
