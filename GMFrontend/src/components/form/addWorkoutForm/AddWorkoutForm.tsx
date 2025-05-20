import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import AddWorkoutFormInputItem from "./AddWorkoutFormInputItem";
import FormTitle from "../FormTitle";
import type { ServerError } from "../../../types/serverErrorContextType";
import { AddWorkoutFormSchema } from "../../../schemas/addWorkoutFormSchema";
import type { AddWorkoutFormFieldsType } from "../../../types/formFieldsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { div } from "motion/react-client";
import { useForm } from "react-hook-form";
type Props = {
  onSubmit: (data: AddWorkoutFormSchema) => void;
  fields: AddWorkoutFormFieldsType[];
  title: string;
  defaultValues: { name: ""; date: Date };
  serverError: ServerError;
};

const AddWorkoutForm = ({
  onSubmit,
  fields,
  title,
  defaultValues,
  serverError,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddWorkoutFormSchema>({
    resolver: zodResolver(AddWorkoutFormSchema),
    defaultValues,
  });
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title={title} />
      {serverError.msg && (
        <span className="text-red-500">{serverError.msg}</span>
      )}
      {fields.map((field) => (
        <div>
          <FormInputLabel name={field.label} />
          <AddWorkoutFormInputItem
            type={field.type}
            register={register}
            name={field.name}
            errorMsg={(errors as any)[field.name]?.message}
          />
        </div>
      ))}
      {!isSubmitting && <FormSubmitButton />}
    </form>
  );
};

export default AddWorkoutForm;
