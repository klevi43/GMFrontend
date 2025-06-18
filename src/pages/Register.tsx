import type { SubmitHandler } from "react-hook-form";
import FormContainer from "../components/containers/FormContainer";
import Footer from "../components/footer/Footer";
import UserCredentialsForm from "../components/form/userCredentialsForm/UserCredentialsForm";
import Nav from "../components/navbar/Nav";
import { useRegister } from "../hooks/useRegister";
import type { UserCredentialsFormSchema } from "../schemas/userCredentialsSchema";
import type { UserCredentialsInput } from "../types/inputTypes";
const Register = () => {
  const mutation = useRegister();
  const onSubmit: SubmitHandler<UserCredentialsFormSchema> = (
    data: UserCredentialsInput
  ) => {
    mutation.mutateAsync(data);
  };
  return (
    <>
      <Nav />
      <FormContainer>
        <UserCredentialsForm
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
