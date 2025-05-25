import { input } from "motion/react-client";
import React from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import { WorkoutFormSchema } from "../../../schemas/WorkoutFormSchema";
interface Props {
  name: keyof WorkoutFormSchema;
  type: string;
  register: UseFormRegister<WorkoutFormSchema>;
  errorMsg?: string;
}

const WorkoutFormInputItem = ({ name, type, register, errorMsg }: Props) => {
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

export default WorkoutFormInputItem;
