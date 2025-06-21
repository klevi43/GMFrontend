import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { defaultButtonStyles } from "../../../constants/styles";
import { useMod } from "../../../hooks/useMod";
import { SetFormSchema } from "../../../schemas/setFormSchema";
import type { SetFormFieldsType } from "../../../types/formFieldsType";
import type { SetInput } from "../../../types/inputTypes";
import ErrorMessage from "../../messages/ErrorMessage";
import SuccessMessage from "../../messages/SuccessMessage";
import ModalCloseButton from "../../modals/ModalCloseButton";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import Title from "../Title";
import SetFormInputItem from "./SetFormInputItem";
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
    defaultValues: {
      weight: undefined,
      reps: undefined,
    },
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

export default SetForm;
