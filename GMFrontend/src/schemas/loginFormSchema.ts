import * as z from "zod";
const LoginFormSchema = z.object({
  email: z.string().nonempty(),
  password: z.string().min(8, {
    message: "Minimum 8 characters required",
  }),
});

export default LoginFormSchema;
