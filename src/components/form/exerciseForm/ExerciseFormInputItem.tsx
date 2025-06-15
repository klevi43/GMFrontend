import React from "react";
import type { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import type { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../messages/ErrorMessage";
interface Props {
  name: keyof ExerciseFormSchema;
  type: string;
  register: UseFormRegister<ExerciseFormSchema>;
  errorMsg?: string;
}
const ExerciseFormInputItem = ({ name, type, register, errorMsg }: Props) => {
  return (
    <>
      <div className="w-full">
        <input
          className=" p-2.5 w-full bg-input rounded-lg"
          type={type}
          {...register(name)}
        />
        {errorMsg && <ErrorMessage fontSize="1rem" message={errorMsg} />}
      </div>
    </>
  );
};

export default ExerciseFormInputItem;
