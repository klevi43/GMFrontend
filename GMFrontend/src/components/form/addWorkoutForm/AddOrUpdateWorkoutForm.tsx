import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import WorkoutFormInputItem from "./AddWorkoutFormInputItem";
import FormTitle from "../FormTitle";
import { WorkoutFormSchema } from "../../../schemas/WorkoutFormSchema";
import type { WorkoutFormFieldsType } from "../../../types/formFieldsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalCloseButton from "../../modals/ModalCloseButton";
import { useModal } from "../../../hooks/useModal";
type Props = {
  onSubmit: (data: WorkoutFormSchema) => void;
  fields: WorkoutFormFieldsType[];
  title: string;
  defaultValues: { name: ""; date: "" };
};

const AddOrUpdateWorkoutForm = ({
  onSubmit,
  fields,
  title,
  defaultValues,
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
        <FormTitle title={title} />

        {fields.map((field) => (
          <div>
            <FormInputLabel name={field.label} />
            <WorkoutFormInputItem
              type={field.type}
              register={register}
              name={field.name}
              errorMsg={(errors as any)[field.name]?.message}
            />
          </div>
        ))}
        {!isSubmitting && <FormSubmitButton />}
      </form>
    </div>
  );
};

export default AddOrUpdateWorkoutForm;
