import React from "react";
import type { SetFormSchema } from "../../../schemas/setFormSchema";
import type { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../messages/ErrorMessage";
interface Props {
  name: keyof SetFormSchema;
  register: UseFormRegister<SetFormSchema>;
  errorMsg?: string;
}
const setFormInputItem = ({ name, register, errorMsg }: Props) => {
  return (
    <>
      <div className="w-full mb-8">
        <input
          className=" p-2.5 w-full bg-input rounded-lg"
          type="number"
          inputMode="numeric" // hint to the kind of keyboard the browser needs to show on mobile
          step="1"
          {...register(name)}
        />
        {errorMsg && <ErrorMessage fontSize="1rem" message={errorMsg} />}
      </div>
    </>
  );
};

export default setFormInputItem;
