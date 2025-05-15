import React, { useContext, useRef, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthProvider";
import { useAsyncError } from "react-router";
import { AuthService } from "../services/AuthService";
import useLoginForm from "../hooks/useLoginForm";
import { Form } from "react-hook-form";
//import { useLoginForm } from "../hooks/useLoginForm";
const Login = () => {
  const authService: AuthService = new AuthService();
  const form = useLoginForm();
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
