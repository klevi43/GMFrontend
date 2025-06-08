import React from "react";
import { SetFormSchema } from "../../../schemas/setFormSchema";
import type { SetFormFieldsType } from "../../../types/formFieldsType";
import type { SetInput } from "../../../types/inputTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ModalCloseButton from "../../modals/ModalCloseButton";
import Title from "../Title";
import ErrorMessage from "../../messages/ErrorMessage";
import FormInputLabel from "../FormInputLabel";
import SetFormInputItem from "./SetFormInputItem";
import FormSubmitButton from "../FormSubmitButton";
import { useMod } from "../../../hooks/useMod";
import SuccessMessage from "../../messages/SuccessMessage";
interface Props {
  onSubmit: (data: SetFormSchema) => void;
  fields: SetFormFieldsType[];
  title: string;
  defaultValues: SetInput;
  error: unknown;
  isSuccess: boolean;
}
const SetForm = ({
  onSubmit,
  fields,
  title,
  defaultValues,
  error,
  isSuccess,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SetFormSchema>({
    resolver: zodResolver(SetFormSchema),
    defaultValues,
  });
  const { closeModal } = useMod();
  return (
    <div className="relative">
      <ModalCloseButton closeModal={closeModal} />
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Title title={title} />
        {error instanceof Error && (
          <ErrorMessage fontSize="1rem" message={error.message} />
        )}
        {isSuccess && <SuccessMessage fontSize="[1rem]" />}
        {fields.map((field) => (
          <div key={field.name}>
            <FormInputLabel name={field.label} />
            <SetFormInputItem
              register={register}
              name={field.name}
              errorMsg={(errors as any)[field.name]?.message}
            />
          </div>
        ))}
        {!isSuccess && <FormSubmitButton isSubmitting={isSubmitting} />}
        {isSuccess && (
          <button
            onClick={closeModal}
            className="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:scale-102 hover:cursor-pointer transition-all duration-300"
          >
            Close
          </button>
        )}
      </form>
    </div>
  );
};

export default SetForm;
