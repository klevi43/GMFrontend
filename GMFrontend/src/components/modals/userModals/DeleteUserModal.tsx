import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import Title from "../../form/Title";
import ErrorMessage from "../../messages/ErrorMessage";
import ModalCloseButton from "../ModalCloseButton";
import { useDeleteUser } from "../../../hooks/userHooks/useDeleteUser";
import { useMod } from "../../../hooks/useMod";

const DeletUserModal = () => {
  const mutation = useDeleteUser();
  const { closeModal } = useMod();
  const handleDeleteButtonClick = () => {
    mutation.mutateAsync();
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <div className="relative">
            <ModalCloseButton closeModal={closeModal} />
            <div className="w-full">
              <div className="flex flex-col justify-center items-center mx-auto">
                <Title title={`Delete Account`} />
                {mutation.error instanceof Error && (
                  <ErrorMessage
                    fontSize="1rem"
                    message={mutation.error.message}
                  />
                )}
                <p className="text-text text-[1.2rem] mb-2 text-center">
                  We hate to see you go. Are you sure you want to delete your
                  account?
                </p>

                <p className="text-red-500 mb-4 text-center">
                  This will delete all of your account information as well as
                  all of your logged workouts.
                </p>

                <div className="w-full">
                  <button
                    onClick={handleDeleteButtonClick}
                    className="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:bg-red-500 hover:text-white hover:cursor-pointer transition-all duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default DeletUserModal;
