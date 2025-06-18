import type { UseFormRegister } from "react-hook-form";
import type { UpdateUserEmailFormSchema } from "../../../schemas/updateUserEmailFormSchema";

interface Props {
  name: "currentEmail" | "newEmail" | "password";
  type: string;
  register: UseFormRegister<UpdateUserEmailFormSchema>;
  errorMsg?: string;
}

const UpdateUserEmailFormInputItem = ({
  name,
  type,
  register,
  errorMsg,
}: Props) => {
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

export default UpdateUserEmailFormInputItem;
