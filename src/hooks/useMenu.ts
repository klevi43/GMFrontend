import { useContext } from "react";
import MenuContext from "../contexts/MenuProvider";

export const useMenu = () => {
  return useContext(MenuContext);
};
