import type { UseFormRegister } from "react-hook-form";

import { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import ErrorMessage from "../../messages/ErrorMessage";
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
          className=" p-2.5 w-full bg-input rounded-lg"
          type={type}
          {...register(name)}
        />
        {errorMsg && <ErrorMessage fontSize="1rem" message={errorMsg} />}
      </div>
    </>
  );
};

export default WorkoutFormInputItem;
