import React, { createContext, useState } from "react";
import type ModalContextType from "../types/modalContextType";
import DeleteItemModal from "../components/modals/DeleteItemModal";
import { p } from "motion/react-client";
interface Props {
  children: React.ReactNode;
}
const modalObj: ModalContextType = {
  data: null,
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};
const ModalContext = createContext<ModalContextType>(modalObj);
export const ModalProvider = ({ children }: Props) => {
  const [modalState, setModalState] = useState(modalObj);
  const openModal = (data: ModalContextType["data"]) => {
    setModalState({ data, isOpen: true, openModal, closeModal });
    console.log(data);
  };
  const closeModal = () => {
    setModalState({ ...modalState, data: null, isOpen: false });
  };
  console.log(modalState);

  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
      {/* {modalState.isOpen && modalState.data ? (
        <DeleteItemModal
          title="Workout"
          deleteItemName={modalState.data.name}
          handleClose={closeModal}
        />
      ) : (
        <p className="text-red-500 text-[5rem]">Modal not loading </p>
      )} */}
      {modalState.isOpen && modalState.data && (
        <DeleteItemModal
          title="Workout"
          deleteItemName={modalState.data.name}
          handleClose={closeModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export default ModalContext;
