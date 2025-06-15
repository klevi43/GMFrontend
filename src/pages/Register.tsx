import UserCredentialsForm from "../components/form/userCredentialsForm/UserCredentialsForm";
import type { SubmitHandler } from "react-hook-form";
import FormContainer from "../components/containers/FormContainer";
import { useRegister } from "../hooks/useRegister";
import type { UserCredentialsInput } from "../types/inputTypes";
import Footer from "../components/footer/Footer";
import type { UserCredentialsFormSchema } from "../schemas/userCredentialsSchema";
import Nav from "../components/navbar/Nav";
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
