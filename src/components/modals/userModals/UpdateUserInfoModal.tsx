import type { SubmitHandler } from "react-hook-form";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";

import { useUpdateUserPassword } from "../../../hooks/userHooks/useUpdateUserInfo";
import { UpdateUserPasswordFormSchema } from "../../../schemas/updateUserPasswordFormSchema";
import type { PasswordInput } from "../../../types/inputTypes";
import UpdateUserPasswordForm from "../../form/updatePasswordForm/UpdateUserPasswordForm";

const UpdateUserPasswordModal = () => {
  const mutation = useUpdateUserPassword();

  const onSubmit: SubmitHandler<UpdateUserPasswordFormSchema> = (
    data: PasswordInput
  ) => {
    mutation.mutateAsync(data);
  };
  const note =
    "Note: Updating your password will require you to login again using your new credentials.";
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <UpdateUserPasswordForm
            onSubmit={onSubmit}
            title="Update Account Information"
            fields={[
              {
                name: "currentPassword",
                label: "Current Password",
                type: "password",
              },
              { name: "newPassword", label: "New Password", type: "password" },
              {
                name: "confirmNewPassword",
                label: "Confirm New Password",
                type: "password",
              },
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

export default UpdateUserPasswordModal;
