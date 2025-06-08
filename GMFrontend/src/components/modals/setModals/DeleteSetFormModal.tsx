import React from "react";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ModalCloseButton from "../ModalCloseButton";
import { useMod } from "../../../hooks/useMod";
import type SetDto from "../../../dtos/setDto";
import { useDeleteSet } from "../../../hooks/setHooks/useDeleteSet";
import { useQueryParams } from "../../../hooks/useQueryParams";
import ErrorMessage from "../../messages/ErrorMessage";
import DeleteButton from "../../buttons/DeleteButton";
import SuccessMessage from "../../messages/SuccessMessage";

interface Props {
  initialData: SetDto;
}
const DeleteSetFormModal = ({ initialData }: Props) => {
  const { closeModal } = useMod();
  const { setQueryParams } = useQueryParams();
  const mutation = useDeleteSet();
  const handleDeleteButtonClick = () => {
    try {
      setQueryParams({
        exerciseId: initialData.exerciseId,
        setId: initialData.id,
      });

      mutation.mutateAsync(initialData.id);
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
                <Title title={`Delete Set`} />
                {mutation.error instanceof Error && (
                  <ErrorMessage
                    fontSize="1rem"
                    message={mutation.error.message}
                  />
                )}
                {mutation.isSuccess && <SuccessMessage fontSize="[1rem]" />}

                <p className="text-text text-[1.2rem] mb-2 text-center">
                  Are you sure you want to delete this set?
                </p>
                <h4 className="flex justify-between w-[80%] text-white text-[2rem] font-bold mb-5 ">
                  <div>{`Weight: ${initialData.weight}`}</div>
                  <div>{`Reps: ${initialData.reps}`}</div>
                </h4>

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

export default DeleteSetFormModal;
