import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import WorkoutFormInputItem from "./WorkoutFormInputItem";
import Title from "../Title";
import { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutFormFieldsType } from "../../../types/formFieldsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalCloseButton from "../../modals/workoutModals/ModalCloseButton";
import { useModal } from "../../../hooks/useModal";
import ErrorMessage from "../../messages/ErrorMessage";
type Props = {
  onSubmit: (data: WorkoutFormSchema) => void;
  fields: WorkoutFormFieldsType[];
  title: string;
  defaultValues: { name: string; date: string };
  error: unknown;
};

const WorkoutForm = ({
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
  } = useForm<WorkoutFormSchema>({
    resolver: zodResolver(WorkoutFormSchema),
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
        {fields.map((field) => (
          <div key={field.name}>
            <FormInputLabel name={field.label} />
            <WorkoutFormInputItem
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

export default WorkoutForm;
