import React from "react";
import Nav from "../components/navbar/Nav";
import Title from "../components/form/Title";
import FormContainer from "../components/containers/FormContainer";
import ShowElementButton from "../components/buttons/ShowElementButton";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";
import Footer from "../components/footer/Footer";
import UpdateUserPasswordModal from "../components/modals/userModals/UpdateUserPasswordModal";
import { useMod } from "../hooks/useMod";
import { useGetUser } from "../hooks/userHooks/useGetUser";
import InfoMessage from "../components/messages/InfoMessage";
import ErrorMessage from "../components/messages/ErrorMessage";
import { formatApiError } from "../utils/formatApiError";

const MyAccount = () => {
  const { openModal } = useMod();

  const { data: userResponseDto, isLoading, error } = useGetUser();
  return (
    <>
      <Nav />
      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className="flex items-baseline">
          <Title title="My Account" styles="text-[3rem]" />
        </div>
        {isLoading && (
          <div className="flex justify-center items-center min-h-[6rem]">
            <InfoMessage
              fontSize="[2rem]"
              message="Loading your account information..."
            />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center min-h-[6rem]">
            <ErrorMessage
              message={formatApiError(error.message)}
              fontSize="[2rem]"
            />
          </div>
        )}

        {userResponseDto && (
          <FormContainer>
            <Title title="Account Details" />
            <div className="mb-[1.5rem]">
              <p className="text-text text-[1.3rem]">Email:</p>
              <p className="text-white text-[1.1rem]">
                {userResponseDto.email}
              </p>
              <p className="text-text text-[1.3rem]">Password:</p>
              <p className="text-white text-[1.1rem]">xxxxxxxxxx</p>
            </div>
            <ShowElementButton
              content="Update Email"
              styles="text-[1.5rem] mb-2 py-2 bg-primary w-full rounded-lg hover:scale-102 active:bg-modal active:border-2 active:border-primary active:text-primary active:scale-95"
              showElement={() =>
                openModal("UPDATE_USER_EMAIL", userResponseDto)
              }
            />
            <ShowElementButton
              content="Update Password"
              styles="text-[1.5rem] py-2 bg-primary w-full rounded-lg hover:scale-102 active:bg-modal active:border-2 active:border-primary active:text-primary active:scale-95"
              showElement={() =>
                openModal("UPDATE_USER_PASSWORD", userResponseDto)
              }
            />
            <div className="flex justify-center">
              <ShowElementButton
                content="Delete Account"
                styles="text-[1.5rem] pt-4 w-fit bg-modal text-text  hover:text-red-500 active:text-red-500 active:scale-95"
                showElement={() => openModal("DELETE_USER_INFO")}
              />
            </div>
          </FormContainer>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
