import type { UseFormRegister } from "react-hook-form";
import type { LoginFormSchema } from "../../../schemas/loginFormSchema";
interface Props {
  name: "email" | "password";
  type: string;
  register: UseFormRegister<LoginFormSchema>;
  errorMsg?: string;
}

const LoginFormInputItem = ({ name, type, register, errorMsg }: Props) => {
  return (
    <>
      <div className="w-full mb-8">
        <input
          className=" p-2.5 w-full bg-input rounded-lg "
          type={type}
          {...register(name)}
        />
        {errorMsg && <span className="text-red-500">{errorMsg}</span>}
      </div>
    </>
  );
};

export default LoginFormInputItem;
