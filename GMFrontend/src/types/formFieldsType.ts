export type FormFields<Name extends string = string> = {
  name: Name;
  label: string;
  type: string;
};

export type RegisterFormFields = {
  name: "email" | "password" | "confirmPassword";
  label: string;
  type: string;
};
