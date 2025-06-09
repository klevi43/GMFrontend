import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import RegisterForm from "../../form/registerForm/RegisterForm";
import type { SubmitHandler } from "react-hook-form";
import type { RegisterFormSchema } from "../../../schemas/registerFormSchema";
import { useUpdateUserInfo } from "../../../hooks/userHooks/useUpdateUserInfo";
import type { RegisterInput } from "../../../types/inputTypes";
import type UserDto from "../../../dtos/userDto";

interface Props {
  initialData: UserDto;
}
const UpdateUserInfoModal = ({ initialData }: Props) => {
  const mutation = useUpdateUserInfo();

  const onSubmit: SubmitHandler<RegisterFormSchema> = (data: RegisterInput) => {
    mutation.mutateAsync(data);
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <RegisterForm
            onSubmit={onSubmit}
            title="Update Account Information"
            fields={[
              { name: "email", label: "Email", type: "text" },
              { name: "password", label: "Password", type: "password" },
              {
                name: "confirmPassword",
                label: "Confirm Password",
                type: "password",
              },
            ]}
            defaultValues={{
              email: initialData.email,
              password: "",
              confirmPassword: "",
            }}
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
