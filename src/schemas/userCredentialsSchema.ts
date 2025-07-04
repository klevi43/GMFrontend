import * as z from "zod";
import {
  FIELD_NOT_EMPTY_MSG,
  MIN_LEN_8_MSG,
  PASSWORD_MUST_MATCH_MSG,
  VALID_EMAIL_MSG,
} from "../constants/errorMsgs";
export const UserCredentialsFormSchema = z
  .object({
    email: z.string().nonempty(FIELD_NOT_EMPTY_MSG).email(VALID_EMAIL_MSG),
    password: z.string().nonempty(FIELD_NOT_EMPTY_MSG).min(8, {
      message: MIN_LEN_8_MSG,
    }),
    confirmPassword: z.string().nonempty(FIELD_NOT_EMPTY_MSG).min(8, {
      message: MIN_LEN_8_MSG,
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: PASSWORD_MUST_MATCH_MSG,
    }
  );

export type UserCredentialsFormSchema = z.infer<
  typeof UserCredentialsFormSchema
>;
