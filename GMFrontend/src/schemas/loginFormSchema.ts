import * as z from "zod";
import {
  FIELD_NOT_EMPTY_MSG,
  VALID_EMAIL_MSG,
  MIN_LEN_8_MSG,
} from "../constants/formErrorMsgs";
export const LoginFormSchema = z.object({
  email: z.string().nonempty(FIELD_NOT_EMPTY_MSG).email(VALID_EMAIL_MSG),
  password: z.string().nonempty(FIELD_NOT_EMPTY_MSG).min(8, {
    message: MIN_LEN_8_MSG,
  }),
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
