import RegisterForm from "../components/form/registerForm/RegisterForm";
import { UserCredentialsFormSchema } from "../schemas/userCredentialsSchema";
import type { SubmitHandler } from "react-hook-form";

import FormContainer from "../components/containers/FormContainer";
import userService from "../services/userService";
import { useNavigate } from "react-router";
import { useRegister } from "../hooks/useRegister";
import type { UserCredentialsInput } from "../types/inputTypes";
import Footer from "../components/footer/Footer";
const Register = () => {
  const mutation = useRegister();
  const onSubmit: SubmitHandler<RegisterFormSchema> = (
    data: UserCredentialsInput
  ) => {
    mutation.mutateAsync(data);
  };
  return (
    <>
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
          defaultValues={{ email: "", password: "", confirmPassword: "" }}
          isSuccess={mutation.isSuccess}
          error={mutation.error}
        />
      </FormContainer>
      <Footer />
    </>
  );
};

export default Register;
