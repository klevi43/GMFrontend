import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import RegisterForm from "../../form/registerForm/RegisterForm";
import type { SubmitHandler } from "react-hook-form";
import type { RegisterFormSchema } from "../../../schemas/registerFormSchema";
import { useUpdateUserInfo } from "../../../hooks/userHooks/useUpdateUserInfo";
import type { RegisterInput } from "../../../types/inputTypes";
import type UserResponseDto from "../../../dtos/userResponseDto";
interface Props {
  initialData: UserResponseDto;
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
            title="Create a New Account"
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
            isModal={true}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateUserInfoModal;
