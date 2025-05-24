import React, { createContext, useState } from "react";
import type ModalContextType from "../types/modalContextType";
import DeleteItemModal from "../components/modals/DeleteItemModal";
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
  };
  const closeModal = () => {
    setModalState({ ...modalState, data: null, isOpen: false });
  };
  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
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
