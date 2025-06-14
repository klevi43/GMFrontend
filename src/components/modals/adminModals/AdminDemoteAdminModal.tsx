import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ErrorMessage from "../../messages/ErrorMessage";
import ModalCloseButton from "../ModalCloseButton";
import { useMod } from "../../../hooks/useMod";
import type UserDto from "../../../dtos/userDto";
import { useAdminDemoteToUser } from "../../../hooks/adminHooks/useAdminDemoteToUser";
import SuccessMessage from "../../messages/SuccessMessage";
import DeleteButton from "../../buttons/DeleteButton";
interface Props {
  initialData: UserDto;
}
const AdminDemoteAdminModal = ({ initialData }: Props) => {
  const { closeModal } = useMod();
  const mutation = useAdminDemoteToUser();
  const handleUpdateButtonClick = () => {
    mutation.mutateAsync(initialData.id);
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
                <Title title={`Demote to User`} />
                {mutation.error instanceof Error && (
                  <ErrorMessage
                    fontSize="1rem"
                    message={mutation.error.message}
                  />
                )}
                {mutation.isSuccess && <SuccessMessage fontSize="[1rem]" />}
                <p className="text-text">
                  Are you sure you want to demote this account to a user?
                </p>
                <h4 className="text-white text-[2rem] font-bold mb-5 ">
                  {initialData.email}
                </h4>
                <p className="text-red-500 mb-4 text-center">
                  Double check the email before clicking submit.
                </p>

                <div className="w-full">
                  {!mutation.isSuccess && (
                    <button
                      disabled={mutation.isPending}
                      onClick={handleUpdateButtonClick}
                      className="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:scale-102  hover:cursor-pointer transition-all duration-300"
                    >
                      {mutation.isPending ? "Submitting..." : "Submit"}
                    </button>
                  )}
                  {mutation.isSuccess && (
                    <ModalCloseButton
                      closeModal={closeModal}
                      styles="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:scale-102 hover:cursor-pointer transition-all duration-300"
                      content="Close"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AdminDemoteAdminModal;
