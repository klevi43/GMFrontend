import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthService } from "../services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { LoginFormSchema } from "../schemas/loginFormSchema";
import { Link } from "react-router";
import Footer from "../components/footer/Footer";
import Home from "./Home";
import Nav from "../components/navbar/Nav";
import FormInputItem from "../components/form/FormInputItem";
import FormInputLabel from "../components/form/FormInputLabel";
import FormSubmitButton from "../components/form/FormSubmitButton";
import FormTitle from "../components/form/FormTitle";
import { useAuth } from "../hooks/useAuth";
import { useServerError } from "../hooks/useServerError";
import Form from "../components/form/Form";
//import { useLoginForm } from "../hooks/useLoginForm";
const Login = () => {
  const authService: AuthService = new AuthService();
  const { setUser } = useAuth();
  const { serverError, setServerError } = useServerError();

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    authService.login(data.email, data.password, setUser, setServerError);
  };
  console.log(serverError);
  return (
    <>
      <Nav />
      <div className="h-auto flex flex-col items-center justify-center">
        <div className="flex justify-center px-6 py-8 mx-auto mt-20 mb-40 max-w-[75%] md:max-w-[50%] md:mt-10 md:mb-15 md:w-100 bg-modal border-1 rounded-sm border-modal-outline">
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
