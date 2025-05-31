import React from "react";
import type { ExerciseFormFieldsType } from "../../../types/formFieldsType";
import { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import type { ExerciseInput } from "../../../types/inputTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSubmitButton from "../FormSubmitButton";
import ExerciseFormInputItem from "./ExerciseFormInputItem";
import FormInputLabel from "../FormInputLabel";
import ErrorMessage from "../../messages/ErrorMessage";
import ModalCloseButton from "../../modals/workoutModals/ModalCloseButton";
import Title from "../Title";
import { useModal } from "../../../hooks/useModal";
import { useSearchParams } from "react-router";
interface Props {
  onSubmit: (data: ExerciseFormSchema) => void;
  field: ExerciseFormFieldsType;
  title: string;
  defaultValues: ExerciseInput;
  error: unknown;
}
const ExerciseForm = ({
  onSubmit,
  field,
  title,
  defaultValues,
  error,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExerciseFormSchema>({
    resolver: zodResolver(ExerciseFormSchema),
    defaultValues,
  });

  const { closeModal } = useModal();
  return (
    <div className="relative">
      <ModalCloseButton closeModal={closeModal} />
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Title title={title} />
        {error instanceof Error && (
          <ErrorMessage fontSize="1rem" message={error.message} />
        )}
        <div key={field.name}>
          <FormInputLabel name={field.label} />
          <ExerciseFormInputItem
            type={field.type}
            register={register}
            name={field.name}
            errorMsg={(errors as any)[field.name]?.message}
          />
        </div>
        ))
        <FormSubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default ExerciseForm;
