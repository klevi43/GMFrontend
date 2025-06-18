import { useMod } from "../../../hooks/useMod";
import { useDeleteUser } from "../../../hooks/userHooks/useDeleteUser";
import DeleteButton from "../../buttons/DeleteButton";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ErrorMessage from "../../messages/ErrorMessage";
import SuccessMessage from "../../messages/SuccessMessage";
import ModalCloseButton from "../ModalCloseButton";

const DeleteUserModal = () => {
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
            <div className="absolute -top-5 right-0">
              <ModalCloseButton content="X" closeModal={closeModal} />
            </div>
            <div className="w-full">
              <div className="flex flex-col justify-center items-center mx-auto">
                <Title title={`Delete Account`} />
                {mutation.error instanceof Error && (
                  <ErrorMessage
                    fontSize="1rem"
                    message={mutation.error.message}
                  />
                )}
                {mutation.isSuccess && <SuccessMessage fontSize="[1rem]" />}

                <p className="text-text text-[1.2rem] mb-2 text-center">
                  We hate to see you go. Are you sure you want to delete your
                  account?
                </p>

                <p className="text-red-500 mb-4 text-center">
                  This will delete all of your account information as well as
                  all of your logged workouts.
                </p>

                <div className="w-full">
                  <DeleteButton
                    isSuccess={mutation.isSuccess}
                    isPending={mutation.isPending}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default DeleteUserModal;
