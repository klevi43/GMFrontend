import {
  useForm,
  type UseFormReturn,
  type SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInputItem from "./LoginFormInputItem";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import Title from "../Title";
import type { ServerError } from "../../../types/serverErrorContextType";
import { LoginFormSchema } from "../../../schemas/loginFormSchema";
import type { LoginFormFieldsType } from "../../../types/formFieldsType";
import ErrorMessage from "../../messages/ErrorMessage";

type Props = {
  // zod schema
  onSubmit: (data: LoginFormSchema) => void; // what to do upon successful submission
  fields: LoginFormFieldsType[]; // the fields to render
  title: string; // title of the form
  defaultValues: { email: ""; password: "" }; // initial values for the form fields
  error: unknown;
};

const LoginForm = ({
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
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema), // automatically validates input data according to given schema
    defaultValues,
  });

  return (
    // handleSubmit is from Zod and validates form onSumbit is my function
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Title title={title} />
      {error instanceof Error && (
        <ErrorMessage fontSize="1rem" message={error.message} />
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
      <FormSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default LoginForm;
