import React from "react";
import { SetFormSchema } from "../../../schemas/setFormSchema";
import type { SetFormFieldsType } from "../../../types/formFieldsType";
import type { SetInput } from "../../../types/inputTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type ExerciseDto from "../../../dtos/exerciseDto";
import { useModal } from "../../../hooks/useModal";
import ModalCloseButton from "../../modals/workoutModals/ModalCloseButton";
import Title from "../Title";
import ErrorMessage from "../../messages/ErrorMessage";
import FormInputLabel from "../FormInputLabel";
import SetFormInputItem from "./SetFormInputItem";
import FormSubmitButton from "../FormSubmitButton";
import { useMod } from "../../../hooks/useMod";
interface Props {
  onSubmit: (data: SetFormSchema) => void;
  fields: SetFormFieldsType[];
  title: string;
  defaultValues: SetInput;
  error: unknown;
}
const SetForm = ({ onSubmit, fields, title, defaultValues, error }: Props) => {
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
    <div>
      <ModalCloseButton closeModal={closeModal} />
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Title title={title} />
        {error instanceof Error && (
          <ErrorMessage fontSize="1rem" message={error.message} />
        )}
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
        <FormSubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default SetForm;
