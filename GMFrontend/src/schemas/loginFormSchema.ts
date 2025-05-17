import * as z from "zod";
export const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Field cannot be empty")
    .email("Please enter a valid email"),
  password: z.string().nonempty("Field cannot be empty").min(8, {
    message: "Minimum 8 characters required",
  }),
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
