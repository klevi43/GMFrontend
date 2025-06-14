import * as z from "zod";
import {
  FIELD_NOT_EMPTY_MSG,
  MIN_LEN_8_MSG,
  PASSWORD_MUST_MATCH_MSG,
  CURRENT_PASSWORD_MUST_NOT_MATCH_NEW_PASSWORD,
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
      return values.currentPassword !== values.newPassword;
    },
    {
      message: CURRENT_PASSWORD_MUST_NOT_MATCH_NEW_PASSWORD,
      path: ["newPassword"],
    }
  )
  .refine(
    (values) => {
      return values.currentPassword !== values.confirmNewPassword;
    },
    {
      message: CURRENT_PASSWORD_MUST_NOT_MATCH_NEW_PASSWORD,
      path: ["confirmNewPassword"],
    }
  )
  .refine(
    (values) => {
      return values.newPassword === values.confirmNewPassword;
    },
    {
      message: PASSWORD_MUST_MATCH_MSG,
      path: ["confirmNewPassword"],
    }
  );

export type UpdateUserPasswordFormSchema = z.infer<
  typeof UpdateUserPasswordFormSchema
>;
