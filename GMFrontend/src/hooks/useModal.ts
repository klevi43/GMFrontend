import { useContext } from "react";
import ModalContext from "../contexts/ModalProvider";

export const useModal = () => {
  return useContext(ModalContext);
};
