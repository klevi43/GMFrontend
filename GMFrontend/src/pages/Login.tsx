import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthService } from "../services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
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
//import { useLoginForm } from "../hooks/useLoginForm";
const Login = () => {
  const authService: AuthService = new AuthService();
  const { setUser } = useAuth();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    console.log(JSON.stringify(data));
    authService.login(data.email, data.password, setUser);
  };
  return (
    <>
      <Nav />
      <div className="h-auto flex flex-col items-center justify-center">
        <div className="flex justify-center px-6 py-8 mx-auto mt-20 mb-40 max-w-[75%] md:max-w-[50%] md:mt-10 md:mb-15 md:w-100 bg-modal border-1 rounded-sm border-modal-outline">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <FormTitle title="Login" />

            <FormInputLabel name="Email" />
            <FormInputItem
              type="text"
              register={register}
              name="email"
              errorMsg={errors?.email?.message}
            />

            <FormInputLabel name="Password" />
            <FormInputItem
              type="password"
              register={register}
              name="password"
              errorMsg={errors.password?.message}
            />
            {!isSubmitting && <FormSubmitButton />}
            <div className="mt-6 text-center">
              <p className="text-text">
                Don't have an account yet?{" "}
                <Link to="/" className="text-white underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
