import React, { createContext, useState } from "react";
import ModalRenderer from "../components/modals/ModalRenderer";
import { useMenu } from "../hooks/useMenu";
import {
  type DtoTypes,
  type ModContextType,
  type ModType,
} from "../types/modContextType";

const ModContext = createContext<ModContextType | undefined>(undefined);
interface Props {
  children: React.ReactNode;
}
export const ModProvider = ({ children }: Props) => {
  const [modType, setModType] = useState<ModType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<DtoTypes | null>(null);
  const { showOpenMenu: showOpenMenuById } = useMenu();
  const openModal = (type: ModType, initialData?: DtoTypes) => {
    showOpenMenuById(-1, undefined);
    setModType(type);
    setIsOpen(true);
    setInitialData(initialData ?? null);
  };

  const closeModal = () => {
    setModType(null);
    setIsOpen(false);
    setInitialData(null);
  };
  return (
    <ModContext.Provider
      value={{ modType, isOpen, openModal, closeModal, initialData }}
    >
      {children}
      {<ModalRenderer type={modType} initialData={initialData} />}
    </ModContext.Provider>
  );
};

export default ModContext;
