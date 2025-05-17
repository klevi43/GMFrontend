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
//import { useLoginForm } from "../hooks/useLoginForm";
const Login = () => {
  const authService: AuthService = new AuthService();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex justify-center px-6 py-8 mx-auto max-w-[75%] md:max-w-[50%] bg-modal border-1 rounded-sm border-modal-outline">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-bold text-[2rem] text-white text-center">
              Login
            </h2>
            <label className="block mb-2 font-medium text-white">Email</label>
            <input
              className=" mb-3 p-2.5 w-full  bg-input rounded-lg focus:ring-primary focuse:border-primary "
              {...register("email")}
            />
            <label className="block mb-2 font-medium text-white">
              Password
            </label>
            <input
              className="mb-9 p-2.5 w-full bg-input rounded-lg focus:ring-primary focuse:border-primary"
              type="password"
              {...register("password")}
            />

            <input
              className="p-2.5 w-full text-[1.5rem] bg-primary border-2 rounded-2xl"
              type="submit"
            />
            <div>
              <p className="text-white">
                Don't have an account yet?{" "}
                <Link to="/" className="">
                  Register here
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
