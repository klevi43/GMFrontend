import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import RegisterFormInputItem from "../registerForm/RegisterFormInputItem";
import Title from "../Title";

import { RegisterFormSchema } from "../../../schemas/registerFormSchema";
import type { RegisterFormFieldsType } from "../../../types/formFieldsType";
import type { RegisterInput } from "../../../types/inputTypes";

type Props = {
  // zod schema
  onSubmit: (data: RegisterInput) => void; // what to do upon successful submission
  fields: RegisterFormFieldsType[]; // the fields to render
  title: string; // title of the form
  defaultValues: { email: ""; password: ""; confirmPassword: "" }; // initial values for the form fields
  error: unknown;
};

const RegisterForm = ({
  onSubmit,
  fields,
  title,
  defaultValues,
  error,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema), // automatically validates input data according to given schema
    defaultValues,
  });

  return (
    // handleSubmit is from Zod and validates form onSumbit is my function
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Title title={title} />
      {error instanceof Error && (
        <span className="text-red-500">{error.message}</span>
      )}
      {fields.map((field) => (
        <div key={field.name}>
          <FormInputLabel name={field.label} />
          <RegisterFormInputItem
            type={field.type}
            register={register}
            name={field.name}
            errorMsg={(errors as any)[field.name]?.message}
          />
        </div>
      ))}
      <FormSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default RegisterForm;
