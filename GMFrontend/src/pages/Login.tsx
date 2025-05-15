import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthService } from "../services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { LoginFormSchema } from "../schemas/LoginFormSchema";
//import { useLoginForm } from "../hooks/useLoginForm";
const Login = () => {
  const authService: AuthService = new AuthService();
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //authService.login(email, password);
  };
  return (
    <div>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control= {form.control}

        </form>
        
      </Form> */}
      {/* <h1 className="text-white">Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="border-white border-2 bg-amber-50"
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input
          className="border-white border-2 bg-amber-50"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="text-white border-white border-2" type="submit">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default Login;
