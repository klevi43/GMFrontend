import ModalContainer from "../containers/ModalContainer";
import FormContainer from "../containers/FormContainer";
import { useModal } from "../../hooks/useModal";
import Title from "../form/Title";
import ModalCloseButton from "./workoutModals/ModalCloseButton";
import type { UseMutationResult } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
interface Props<T> {
  title: string;
  warning?: string;
  mutation: UseMutationResult<AxiosResponse<any>, unknown, T, unknown>;
}

const DeleteItemModal = <T,>({ title, warning, mutation }: Props<T>) => {
  const { optionalDto, queryParams, closeModal } = useModal();

  const handleDeleteButtonClick = async () => {
    try {
      if (queryParams) {
        mutation.mutateAsync(queryParams as T);
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
                  {optionalDto?.name}
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
