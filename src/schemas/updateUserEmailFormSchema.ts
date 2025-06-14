import { z } from "zod";
import {
  CURRENT_EMAIL_MUST_NOT_MATCH_NEW_EMAIL,
  MIN_LEN_8_MSG,
} from "../constants/errorMsgs";

export const UpdateUserEmailFormSchema = z
  .object({
    currentEmail: z.string().email(),
    newEmail: z.string().email(),
    password: z.string().min(8, {
      message: MIN_LEN_8_MSG,
    }),
  })
  .refine(
    (values) => {
      return values.currentEmail !== values.newEmail;
    },
    {
      message: CURRENT_EMAIL_MUST_NOT_MATCH_NEW_EMAIL,
      path: ["newEmail"],
    }
  );

export type UpdateUserEmailFormSchema = z.infer<
  typeof UpdateUserEmailFormSchema
>;
