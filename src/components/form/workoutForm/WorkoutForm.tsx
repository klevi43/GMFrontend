import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { defaultButtonStyles } from "../../../constants/styles";
import { useMod } from "../../../hooks/useMod";
import { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutFormFieldsType } from "../../../types/formFieldsType";
import ErrorMessage from "../../messages/ErrorMessage";
import SuccessMessage from "../../messages/SuccessMessage";
import ModalCloseButton from "../../modals/ModalCloseButton";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import Title from "../Title";
import WorkoutFormInputItem from "./WorkoutFormInputItem";
type Props = {
  onSubmit: (data: WorkoutFormSchema) => void;
  fields: WorkoutFormFieldsType[];
  title: string;
  note?: string;
  updateAllPrevious?: boolean;
  defaultValues: { name: string; date: Date };
  error: unknown;
  isSuccess: boolean;
};

const WorkoutForm = ({
  onSubmit,
  fields,
  title,
  note,
  defaultValues,
  error,
  isSuccess,
}: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WorkoutFormSchema>({
    resolver: zodResolver(WorkoutFormSchema),
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

        {fields.map((field) => (
          <div key={field.name}>
            <FormInputLabel name={field.label} />
            <WorkoutFormInputItem
              control={control}
              type={field.type}
              register={register}
              name={field.name}
              errorMsg={(errors as any)[field.name]?.message}
            />
          </div>
        ))}
        {note && <p className="text-text mb-2">{note}</p>}
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

export default WorkoutForm;
