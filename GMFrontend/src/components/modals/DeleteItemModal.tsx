import React from "react";
import ModalContainer from "../containers/ModalContainer";
import FormContainer from "../containers/FormContainer";
import { useModal } from "../../hooks/useModal";
import { useDeleteWorkout } from "../../hooks/workoutHooks/useDeleteWorkout";
import Title from "../form/Title";
import ModalCloseButton from "./ModalCloseButton";
interface Props {
  title: string;
  deleteItemName: string;
  warning?: string;
  handleClose: () => void;
}

const DeleteItemModal = ({
  title,
  deleteItemName,
  warning,
  handleClose,
}: Props) => {
  const { data, closeModal } = useModal();
  const mutation = useDeleteWorkout();
  const handleDeleteButtonClick = async () => {
    try {
      if (data) {
        mutation.mutateAsync(data.id);
      }
    } catch (error) {}
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <div className="relative">
            <ModalCloseButton closeModal={closeModal} />
            <div className="w-full">
              <div className="flex flex-col justify-center items-center mx-auto">
                <Title title={`Delete ${title}`} />
                <p className="text-text text-[1.2rem] mb-2 text-center">
                  Are you sure you want to delete this {title.toLowerCase()}?
                </p>
                <h4 className="text-white text-[2rem] font-bold mb-5 ">
                  {deleteItemName}
                </h4>
                {warning && (
                  <p className="text-red-500 mb-4 text-center">{warning}</p>
                )}
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

export default DeleteItemModal;
