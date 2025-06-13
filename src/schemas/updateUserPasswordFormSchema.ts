import * as z from "zod";
import {
  FIELD_NOT_EMPTY_MSG,
  VALID_EMAIL_MSG,
  MIN_LEN_8_MSG,
  PASSWORD_MUST_MATCH_MSG,
} from "../constants/errorMsgs";
export const UpdateUserPasswordFormSchema = z
  .object({
    currentPassword: z.string().nonempty(FIELD_NOT_EMPTY_MSG).min(8, {
      message: MIN_LEN_8_MSG,
    }),
    newPassword: z.string().nonempty(FIELD_NOT_EMPTY_MSG).min(8, {
      message: MIN_LEN_8_MSG,
    }),
    confirmNewPassword: z.string().nonempty(FIELD_NOT_EMPTY_MSG).min(8, {
      message: MIN_LEN_8_MSG,
    }),
  })
  .refine(
    (values) => {
      return values.newPassword === values.confirmNewPassword;
    },
    {
      message: PASSWORD_MUST_MATCH_MSG,
    }
  );

export type UpdateUserPasswordFormSchema = z.infer<
  typeof UpdateUserPasswordFormSchema
>;
