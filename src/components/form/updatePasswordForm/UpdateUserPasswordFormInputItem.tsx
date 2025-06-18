import type { UseFormRegister } from "react-hook-form";
import type { UpdateUserPasswordFormSchema } from "../../../schemas/updateUserPasswordFormSchema";

interface Props {
  name: "currentPassword" | "newPassword" | "confirmNewPassword";
  type: string;
  register: UseFormRegister<UpdateUserPasswordFormSchema>;
  errorMsg?: string;
}

const UpdateUserPasswordFormInputItem = ({
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

export default UpdateUserPasswordFormInputItem;
