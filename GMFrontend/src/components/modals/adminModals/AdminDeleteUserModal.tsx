import React from "react";
import type UserDto from "../../../dtos/userDto";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ErrorMessage from "../../messages/ErrorMessage";
import ModalCloseButton from "../ModalCloseButton";
import { useMod } from "../../../hooks/useMod";
import { useAdminDeleteUser } from "../../../hooks/adminHooks/useAdminDeleteUser";
interface Props {
  initialData: UserDto;
}
const AdminDeleteUserModal = ({ initialData }: Props) => {
  const { closeModal } = useMod();
  const mutation = useAdminDeleteUser();
  const handleDeleteButtonClick = () => {
    mutation.mutateAsync(initialData.id);
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
                <p className="text-text">
                  Are you sure you want to delete this account?
                </p>
                <h4 className="text-white text-[2rem] font-bold mb-5 ">
                  {initialData.email}
                </h4>
                <p className="text-red-500 mb-4 text-center">
                  This will delete all of this user's account information as
                  well as all of your logged workouts.
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

export default AdminDeleteUserModal;
