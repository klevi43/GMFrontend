import React from "react";
interface Props {
  children: React.ReactNode;
}
const FormContainer = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center px-6 py-8 mx-auto mt-10 mb-40 w-full max-w-[400px] md:mb-15 bg-modal border-1 rounded-sm border-modal-outline">
        {children}
      </div>
    </>
  );
};

export default FormContainer;
