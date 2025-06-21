import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Controller,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import ErrorMessage from "../../messages/ErrorMessage";

interface Props {
  name: keyof WorkoutFormSchema;
  type: string;
  control: Control<WorkoutFormSchema>;
  register: UseFormRegister<WorkoutFormSchema>;
  errorMsg?: string;
}

const WorkoutFormInputItem = ({
  name,
  type,
  control,
  register,
  errorMsg,
}: Props) => {
  return (
    <>
      <div className="w-full mb-8">
        {type === "date" ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <div className="w-full block">
                <DatePicker
                  wrapperClassName="w-full"
                  className="w-full p-2.5 bg-input rounded-lg border"
                  placeholderText="Pick a date"
                  selected={field.value instanceof Date ? field.value : null}
                  onChange={field.onChange}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
            )}
          />
        ) : (
          <input
            className="p-2.5 w-full bg-input rounded-lg"
            type={type}
            {...register(name)}
          />
        )}

        {errorMsg && <ErrorMessage fontSize="1rem" message={errorMsg} />}
      </div>
    </>
  );
};

export default WorkoutFormInputItem;
