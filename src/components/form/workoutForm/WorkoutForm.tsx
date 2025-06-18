import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import WorkoutFormInputItem from "./WorkoutFormInputItem";
import Title from "../Title";
import { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutFormFieldsType } from "../../../types/formFieldsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalCloseButton from "../../modals/ModalCloseButton";
import ErrorMessage from "../../messages/ErrorMessage";
import { useMod } from "../../../hooks/useMod";
import SuccessMessage from "../../messages/SuccessMessage";
type Props = {
  onSubmit: (data: WorkoutFormSchema) => void;
  fields: WorkoutFormFieldsType[];
  title: string;
  note?: string;
  updateAllPrevious?: boolean;
  defaultValues: { name: string; date: string };
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
              type={field.type}
              register={register}
              name={field.name}
              errorMsg={(errors as any)[field.name]?.message}
            />
          </div>
        ))}
        {note && <p className="text-text">{note}</p>}
        {!isSuccess && <FormSubmitButton isSubmitting={isSubmitting} />}
        {isSuccess && (
          <ModalCloseButton
            closeModal={closeModal}
            styles="mt-3 bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:scale-102 hover:cursor-pointer transition-all duration-300 active:bg-modal active:text-primary active:border-2 active:border:primary"
            content="Close"
          />
        )}
      </form>
    </div>
  );
};

export default WorkoutForm;
