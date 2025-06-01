import RegisterForm from "../components/form/registerForm/RegisterForm";
import { RegisterFormSchema } from "../schemas/registerFormSchema";
import type { SubmitHandler } from "react-hook-form";

import FormContainer from "../components/containers/FormContainer";
import userService from "../services/userService";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
    console.log(data);
    userService.register(
      data.email,
      data.password,
      data.confirmPassword,
      setServerError
    );
    navigate("/login");
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
          serverError={serverError}
        />
      </FormContainer>
    </>
  );
};

export default Register;
