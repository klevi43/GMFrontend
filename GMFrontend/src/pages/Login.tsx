import type { SubmitHandler } from "react-hook-form";
import { LoginFormSchema } from "../schemas/loginFormSchema";
import Footer from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import { useAuth } from "../hooks/useAuth";
import { useServerError } from "../hooks/useServerError";
import Form from "../components/form/Form";
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
        <div className="flex flex-col justify-center px-6 py-8 mx-auto mt-20 mb-40 max-w-[75%] md:max-w-[50%] md:mt-10 md:mb-15 md:w-100 bg-modal border-1 rounded-sm border-modal-outline">
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Login;
