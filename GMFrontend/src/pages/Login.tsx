import type { SubmitHandler } from "react-hook-form";
import Footer from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import { useAuth } from "../hooks/useAuth";
import { LoginFormSchema } from "../schemas/loginFormSchema";
import { Link } from "react-router";
import FormContainer from "../components/containers/FormContainer";
import LoginForm from "../components/form/loginForm/LoginForm";
import type { LoginInput } from "../types/inputTypes";

const Login = () => {
  const onSubmit: SubmitHandler<LoginFormSchema> = (data: LoginInput) => {
    try {
      mutation.mutateAsync(data);
    } catch (error) {}
  };
  const mutation = useAuth();
  return (
    <>
      <Nav />
      <div className="h-auto flex flex-col items-center justify-center">
        <FormContainer>
          <LoginForm
            onSubmit={onSubmit}
            title="Login"
            defaultValues={{ email: "", password: "" }}
            fields={[
              { name: "email", label: "Email", type: "text" },
              { name: "password", label: "Password", type: "password" },
            ]}
            error={mutation.error}
          />
          <span className="mt-5 text-center text-text">
            Don't have an account?{" "}
            <Link className="text-white underline" to="/register">
              Register here
            </Link>
          </span>
        </FormContainer>

        <Footer />
      </div>
    </>
  );
};

export default Login;
