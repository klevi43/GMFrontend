import React from "react";
import FormContainer from "../components/containers/FormContainer";
import Footer from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import Title from "../components/form/Title";

const NotFound = () => {
  return (
    <>
      <Nav />
      <FormContainer>
        <Title title="404 Not Found" />
        <p className="text-text text-[1.1rem] text-center">
          It looks like the resource you were trying to access does not exist.
        </p>
      </FormContainer>
      <Footer />
    </>
  );
};

export default NotFound;
