import React, { useContext, useRef, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthProvider";
import { useAsyncError } from "react-router";
import { AuthService } from "../services/AuthService";

const Login = () => {
  const authService: AuthService = new AuthService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    authService.login(email, password);
  };
  return (
    <div>
      <h1 className="text-white">Login</h1>
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
      </form>
    </div>
  );
};

export default Login;
