import { useContext } from "react";
import ModContext from "../contexts/ModProvider";

export const useMod = () => {
  const context = useContext(ModContext);
  if (!context) throw new Error("useMod is not set");
  return context;
};
