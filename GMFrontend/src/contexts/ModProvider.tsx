import React, { createContext, useState } from "react";
import {
  type ModType,
  type ModContextType,
  type InputDtoTypes,
} from "../types/modContextType";
import type WorkoutDto from "../dtos/workoutDto";
import ModalRenderer from "../components/modals/ModalRenderer";
import { input } from "motion/react-client";

const ModContext = createContext<ModContextType | undefined>(undefined);
interface Props {
  children: React.ReactNode;
}
export const ModProvider = ({ children }: Props) => {
  const [modType, setModType] = useState<ModType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<InputDtoTypes | null>(null);

  const openModal = (type: ModType, initialData?: InputDtoTypes) => {
    console.log(initialData);
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
