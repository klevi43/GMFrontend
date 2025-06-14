import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import { useUpdateUserEmail } from "../../../hooks/userHooks/useUpdateUserEmail";
import type { SubmitHandler } from "react-hook-form";
import type { UpdateUserEmailFormSchema } from "../../../schemas/updateUserEmailFormSchema";
import type { EmailInput } from "../../../types/inputTypes";
import UpdateUserEmailForm from "../../form/updateEmailForm/UpdateUserEmailForm";
import type UserDto from "../../../dtos/userDto";

interface Props {
  initialData: UserDto;
}
const UpdateUserEmailFormModal = ({ initialData }: Props) => {
  const mutation = useUpdateUserEmail();
  const onSubmit: SubmitHandler<UpdateUserEmailFormSchema> = (
    data: EmailInput
  ) => {
    try {
      mutation.mutateAsync(data);
    } catch (error) {}
  };
  const note =
    "Note: Updating your email will require you to login again using your new credentials.";

  return (
    <>
      <ModalContainer>
        <FormContainer>
          <UpdateUserEmailForm
            onSubmit={onSubmit}
            title="Update Account Email"
            fields={[
              { name: "currentEmail", label: "Current Email", type: "email" },
              { name: "newEmail", label: "New Email", type: "email" },
              { name: "password", label: "Password", type: "password" },
            ]}
            note={note}
            error={mutation.error}
            isSuccess={mutation.isSuccess}
            isModal={true}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateUserEmailFormModal;
