import React, { createContext, useState } from "react";
import {
  type ModType,
  type ModContextType,
  type InputDtoTypes,
} from "../types/modContextType";
import type WorkoutDto from "../dtos/workoutDto";
import ModalRenderer from "../components/modals/ModalRenderer";
interface Props {
  children: React.ReactNode;
}

const ModContext = createContext<ModContextType>({
  modType: null,
  isOpen: false,
  initialData: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModProvider = ({ children }: Props) => {
  const [modType, setModType] = useState<ModType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<InputDtoTypes | null>(null);

  const openModal = (type: ModType, initialData?: WorkoutDto) => {
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
      {<ModalRenderer type={modType} />}
    </ModContext.Provider>
  );
};

export default ModContext;
