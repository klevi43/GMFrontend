import React from "react";
import ModalContainer from "../containers/ModalContainer";
import FormContainer from "../containers/FormContainer";
import { useModal } from "../../hooks/useModal";
import { useDeleteWorkout } from "../../hooks/workoutHooks/useDeleteWorkout";
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
  const { data } = useModal();
  const { mutate } = useDeleteWorkout();
  const handleDeleteButtonClick = () => {
    if (data) {
      mutate(data.id);
    }
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <div>
            <h3 className="text-white">Delete {title}</h3>
            <p className="text-text">
              Are you sure you want to delete this {title.toLowerCase()}?
            </p>
            <h4 className="text-white">{deleteItemName}</h4>
            {warning && <p className="text-red-500">{warning}</p>}
            <div>
              <button
                onClick={handleClose}
                className="bg-modal border-text border-1 text-text rounded-lg hover:outline-primary hover:text-primary hover:cursor-pointer  transition-all duration-300 "
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteButtonClick}
                className="bg-primary hover:bg-red-500 hover:text-white hover:cursor-pointer transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default DeleteItemModal;
