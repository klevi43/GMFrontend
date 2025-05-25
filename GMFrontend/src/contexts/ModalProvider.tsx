import React, { createContext, useState } from "react";
import type ModalContextType from "../types/modalContextType";
import DeleteItemModal from "../components/modals/DeleteItemModal";
import { p } from "motion/react-client";
import {
  ADD_TYPE,
  DELETE_TYPE,
  UPDATE_TYPE,
} from "../constants/modalConstants";
import AddWorkoutFormModal from "../components/modals/AddWorkoutFormModal";
import UpdateWorkoutFormModal from "../components/modals/UpdateWorkoutFormModal";
interface Props {
  children: React.ReactNode;
}
const modalObj: ModalContextType = {
  type: null,
  data: null,
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};
const ModalContext = createContext<ModalContextType>(modalObj);

export const ModalProvider = ({ children }: Props) => {
  const [modalState, setModalState] = useState(modalObj);
  const openModal = (
    type: ModalContextType["type"],
    data: ModalContextType["data"]
  ) => {
    setModalState({ type, data, isOpen: true, openModal, closeModal });
    console.log(data);
  };
  const closeModal = () => {
    setModalState({ ...modalState, data: null, isOpen: false });
  };
  console.log(modalState);

  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
      {modalState.type === UPDATE_TYPE &&
        modalState.isOpen &&
        modalState.data && <UpdateWorkoutFormModal />}
      {modalState.type === ADD_TYPE && modalState.isOpen && (
        <AddWorkoutFormModal />
      )}
      {modalState.type === DELETE_TYPE &&
        modalState.isOpen &&
        modalState.data && (
          <DeleteItemModal
            title="Workout"
            deleteItemName={modalState.data.name}
            warning="This will delete all exercises and sets in this workout."
            handleClose={closeModal}
          />
        )}
    </ModalContext.Provider>
  );
};

export default ModalContext;
