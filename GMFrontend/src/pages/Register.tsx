import React from "react";
import Form from "../components/form/Form";
import { RegisterFormSchema } from "../schemas/registerFormSchema";
import type { SubmitHandler } from "react-hook-form";
import { useServerError } from "../hooks/useServerError";

const Register = () => {
  const { serverError, setServerError } = useServerError();
  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
    console.log(data);
    setServerError({});
  };
  return (
    <>
      <Form
        schema={RegisterFormSchema}
        onSubmit={onSubmit}
        title="Create a New Account"
        fields={[
          { name: "email", label: "Email", type: "text" },
          { name: "password", label: "Password", type: "password" },
          { name: "password", label: "Confirm Password", type: "password" },
        ]}
        defaultValues={{ email: "", password: "", confirmPassword: "" }}
        serverError={serverError}
      />
    </>
  );
};

export default Register;
