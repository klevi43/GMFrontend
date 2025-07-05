import { defaultButtonStyles } from "../../../constants/styles";
import type SetDto from "../../../dtos/setDto";
import { useDeleteSet } from "../../../hooks/setHooks/useDeleteSet";
import { useMod } from "../../../hooks/useMod";
import { useQueryParams } from "../../../hooks/useQueryParams";
import DeleteButton from "../../buttons/DeleteButton";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ErrorMessage from "../../messages/ErrorMessage";
import SuccessMessage from "../../messages/SuccessMessage";
import ModalCloseButton from "../ModalCloseButton";

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
      <div className="max-w-[400px]">
        <ModalContainer>
          <FormContainer>
            <div className="relative">
              <div className="absolute -top-5 right-0">
                <ModalCloseButton content="X" closeModal={closeModal} />
              </div>
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
                  <h4 className="flex justify-evenly w-[95%] text-white text-[2rem] font-bold mb-5 ">
                    <div>{`lbs: ${initialData.weight}`}</div>
                    <div>{`Reps: ${initialData.reps}`}</div>
                  </h4>

                  <div className="w-full">
                    {!mutation.isSuccess && (
                      <DeleteButton
                        isPending={mutation.isPending}
                        handleDeleteButtonClick={handleDeleteButtonClick}
                      />
                    )}

                    {mutation.isSuccess && (
                      <ModalCloseButton
                        closeModal={closeModal}
                        styles={defaultButtonStyles}
                        content="Close"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FormContainer>
        </ModalContainer>
      </div>
    </>
  );
};

export default DeleteSetFormModal;
