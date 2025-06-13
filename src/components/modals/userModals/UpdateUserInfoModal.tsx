import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import UserCredentialsForm from "../../form/userCredentialsForm/UserCredentialsForm";
import type { SubmitHandler } from "react-hook-form";
import type { UserCredentialsFormSchema } from "../../../schemas/userCredentialsSchema";
import { useUpdateUserInfo } from "../../../hooks/userHooks/useUpdateUserInfo";
import type { UserCredentialsInput } from "../../../types/inputTypes";
import type UserDto from "../../../dtos/userDto";

interface Props {
  initialData: UserDto;
}
const UpdateUserInfoModal = ({ initialData }: Props) => {
  const mutation = useUpdateUserInfo();

  const onSubmit: SubmitHandler<UserCredentialsFormSchema> = (
    data: UserCredentialsInput
  ) => {
    mutation.mutateAsync(data);
  };
  const note =
    "Note: Updating your email and password information will require you to login again using your new credentials.";
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <UserCredentialsForm
            onSubmit={onSubmit}
            title="Update Account Information"
            fields={[
              { name: "email", label: "New Email", type: "text" },
              { name: "password", label: "New Password", type: "password" },
              {
                name: "confirmPassword",
                label: "Confirm New Password",
                type: "password",
              },
            ]}
            defaultValues={{
              email: initialData.email,
              password: "",
              confirmPassword: "",
            }}
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

export default UpdateUserInfoModal;
