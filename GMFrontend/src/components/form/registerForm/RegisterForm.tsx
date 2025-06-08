import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import RegisterFormInputItem from "../registerForm/RegisterFormInputItem";
import Title from "../Title";

import { RegisterFormSchema } from "../../../schemas/registerFormSchema";
import type { RegisterFormFieldsType } from "../../../types/formFieldsType";
import type { RegisterInput } from "../../../types/inputTypes";
import ModalCloseButton from "../../modals/ModalCloseButton";
import { useMod } from "../../../hooks/useMod";
import SuccessMessage from "../../messages/SuccessMessage";

type Props = {
  // zod schema
  onSubmit: (data: RegisterInput) => void; // what to do upon successful submission
  fields: RegisterFormFieldsType[]; // the fields to render
  title: string; // title of the form
  defaultValues: { email: string; password: ""; confirmPassword: "" }; // initial values for the form fields
  error: unknown;
  isSuccess: boolean;
  isModal?: boolean;
};

const RegisterForm = ({
  onSubmit,
  fields,
  title,
  defaultValues,
  error,
  isSuccess,
  isModal,
}: Props) => {
  const { closeModal } = useMod();
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
    <div className="relative">
      {isModal && <ModalCloseButton closeModal={closeModal} />}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Title title={title} />
        {error instanceof Error && (
          <span className="text-red-500">{error.message}</span>
        )}
        {isSuccess && isModal && <SuccessMessage fontSize="[1rem]" />}
        {isSuccess && !isModal && (
          <SuccessMessage
            message="Success! Navigating to login page..."
            fontSize="[1rem]"
          />
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
    </div>
  );
};

export default RegisterForm;
