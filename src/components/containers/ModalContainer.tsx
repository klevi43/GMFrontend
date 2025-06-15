import React from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}
const ModalContainer = ({ children }: Props) => {
  if (typeof window === "undefined") return null;
  return createPortal(
    <div className="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-50">
      {children}
    </div>,
    document.body
  );
};

export default ModalContainer;
