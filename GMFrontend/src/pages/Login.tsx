import type { SubmitHandler } from "react-hook-form";
import { LoginFormSchema } from "../schemas/loginFormSchema";
import Footer from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import { useAuth } from "../hooks/useAuth";
import { useServerError } from "../hooks/useServerError";
import Form from "../components/form/Form";
import FormContainer from "../components/containers/FormContainer";
import authService from "../services/authService";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const { setAuthUser } = useAuth();
  const { serverError, setServerError } = useServerError();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    authService.login(data.email, data.password, setAuthUser, setServerError);
    navigate("/workouts");
  };
  return (
    <>
      <Nav />
      <div className="h-auto flex flex-col items-center justify-center">
        <FormContainer>
          <Form
            schema={LoginFormSchema}
            onSubmit={onSubmit}
            title="Login"
            defaultValues={{ email: "", password: "" }}
            fields={[
              { name: "email", label: "Email", type: "text" },
              { name: "password", label: "Password", type: "password" },
            ]}
            serverError={serverError}
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
