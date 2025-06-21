import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import type { ExerciseFormFieldsType } from "../../../types/formFieldsType";
import type { ExerciseInput } from "../../../types/inputTypes";
import ErrorMessage from "../../messages/ErrorMessage";
import ModalCloseButton from "../../modals/ModalCloseButton";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import Title from "../Title";
import ExerciseFormInputItem from "./ExerciseFormInputItem";

import { defaultButtonStyles } from "../../../constants/styles";
import { useMod } from "../../../hooks/useMod";
import SuccessMessage from "../../messages/SuccessMessage";
interface Props {
  onSubmit: (data: ExerciseFormSchema) => void;
  field: ExerciseFormFieldsType;
  title: string;
  defaultValues: ExerciseInput;
  error: unknown;
  isSuccess: boolean;
}
const ExerciseForm = ({
  onSubmit,
  field,
  title,
  defaultValues,
  error,
  isSuccess,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExerciseFormSchema>({
    resolver: zodResolver(ExerciseFormSchema),
    defaultValues,
  });

  const { closeModal } = useMod();
  return (
    <div className="relative">
      <div className="absolute -top-5 right-0">
        <ModalCloseButton content="X" closeModal={closeModal} />
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Title title={title} />
        {error instanceof Error && (
          <ErrorMessage fontSize="1rem" message={error.message} />
        )}
        {isSuccess && <SuccessMessage fontSize="[1rem]" />}
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
        {!isSuccess && <FormSubmitButton isSubmitting={isSubmitting} />}
        {isSuccess && (
          <ModalCloseButton
            closeModal={closeModal}
            styles={defaultButtonStyles}
            content="Close"
          />
        )}
      </form>
    </div>
  );
};

export default ExerciseForm;
