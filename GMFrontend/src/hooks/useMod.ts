import { createContext } from "react";
import ModContext from "../contexts/ModProvider";

export const useMod = () => {
  return createContext(ModContext);
};
