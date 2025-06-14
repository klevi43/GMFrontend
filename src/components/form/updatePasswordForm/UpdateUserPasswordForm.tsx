import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInputLabel from "../FormInputLabel";
import FormSubmitButton from "../FormSubmitButton";
import UserCredentialsFormInputItem from "./UpdateUserPasswordFormInputItem";
import Title from "../Title";
import type {
  RegisterFormFieldsType,
  UpdateUserPasswordFormFieldsType,
} from "../../../types/formFieldsType";
import type {
  PasswordInput,
  UserCredentialsInput,
} from "../../../types/inputTypes";
import ModalCloseButton from "../../modals/ModalCloseButton";
import { useMod } from "../../../hooks/useMod";
import SuccessMessage from "../../messages/SuccessMessage";
import { UserCredentialsFormSchema } from "../../../schemas/userCredentialsSchema";
import { UpdateUserPasswordFormSchema } from "../../../schemas/updateUserPasswordFormSchema";
import UpdateUserPasswordFormInputItem from "./UpdateUserPasswordFormInputItem";

type Props = {
  // zod schema
  onSubmit: (data: PasswordInput) => void; // what to do upon successful submission
  fields: UpdateUserPasswordFormFieldsType[]; // the fields to render
  title: string; // title of the form
  note?: string;
  error: unknown;
  isSuccess: boolean;
  isModal?: boolean;
};

const UpdateUserPasswordForm = ({
  onSubmit,
  fields,
  title,
  note,
  error,
  isSuccess,
  isModal,
}: Props) => {
  const { closeModal } = useMod();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserPasswordFormSchema>({
    resolver: zodResolver(UpdateUserPasswordFormSchema), // automatically validates input data according to given schema
  });

  return (
    // handleSubmit is from Zod and validates form onSumbit is my function
    <div className="relative">
      <div className="absolute -top-5 right-0">
        <ModalCloseButton content="X" closeModal={closeModal} />
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Title title={title} />
        {error instanceof Error && (
          <div className="text-center">
            <span className="text-red-500">{error.message}</span>
          </div>
        )}
        {isSuccess && isModal && <SuccessMessage fontSize="[1rem]" />}
        {isSuccess && !isModal && (
          <SuccessMessage
            message="Success! Navigating to login page..."
            fontSize="[1rem]"
          />
        )}
        {fields.map((field) => (
          <div key={field.name}>
            <FormInputLabel name={field.label} />
            <UpdateUserPasswordFormInputItem
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
            styles="bg-primary text-[1.5rem] rounded-lg w-full mt-4 py-2 hover:scale-102 hover:cursor-pointer transition-all duration-300"
            content="Close"
          />
        )}
      </form>
    </div>
  );
};

export default UpdateUserPasswordForm;
