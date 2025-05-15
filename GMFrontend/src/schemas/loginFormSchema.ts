import * as z from "zod";
export const LoginFormSchema = z.object({
  email: z.string().nonempty(),
  password: z.string().min(8, {
    message: "Minimum 8 characters required",
  }),
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
