import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInputItem from "./FormInputItem";
import FormInputLabel from "./FormInputLabel";
import FormSubmitButton from "./FormSubmitButton";
import FormTitle from "./FormTitle";
import type { ServerError } from "../../types/serverErrorContextType";

type Field = {
  name: "email" | "password";
  label: string;
  type: string;
};

type Props<T extends z.ZodType<any, any>> = {
  schema: T; // zod schema
  onSubmit: (data: z.infer<T>) => void; // what to do upon successful submission
  fields: Field[]; // the fields to render
  title: string; // title of the form
  defaultValues: z.infer<T>; // initial values for the form fields
  serverError: ServerError;
};

const Form = <T extends z.ZodType<any, any>>({
  schema,
  onSubmit,
  fields,
  title,
  defaultValues,
  serverError,
}: Props<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema), // automatically validates input data according to given schema
    defaultValues,
  });

  return (
    // handleSubmit is from Zod and validates form onSumbit is my function
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title={title} />
      {serverError.msg && (
        <span className="text-red-500">{serverError.msg}</span>
      )}
      {fields.map((field) => (
        <div key={field.name}>
          <FormInputLabel name={field.label} />
          <FormInputItem
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

export default Form;
