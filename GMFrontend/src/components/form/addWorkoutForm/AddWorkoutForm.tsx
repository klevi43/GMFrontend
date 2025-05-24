import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import AddWorkoutFormInputItem from "./AddWorkoutFormInputItem";
import FormTitle from "../FormTitle";
import { AddWorkoutFormSchema } from "../../../schemas/addWorkoutFormSchema";
import type { AddWorkoutFormFieldsType } from "../../../types/formFieldsType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalCloseButton from "../../modals/ModalCloseButton";
type Props = {
  showForm: () => void;
  onSubmit: (data: AddWorkoutFormSchema) => void;
  fields: AddWorkoutFormFieldsType[];
  title: string;
  defaultValues: { name: ""; date: "" };
};

const AddWorkoutForm = ({
  showForm,
  onSubmit,
  fields,
  title,
  defaultValues,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddWorkoutFormSchema>({
    resolver: zodResolver(AddWorkoutFormSchema),
    defaultValues,
  });
  return (
    <div className="relative">
      <ModalCloseButton showForm={showForm} />
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <FormTitle title={title} />

        {fields.map((field) => (
          <div>
            <FormInputLabel name={field.label} />
            <AddWorkoutFormInputItem
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

export default AddWorkoutForm;
