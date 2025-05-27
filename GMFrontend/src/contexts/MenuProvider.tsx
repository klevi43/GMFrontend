import { createContext, useState } from "react";
import type { MenuContextType } from "../types/menuContextType";
interface Props {
  children: React.ReactNode;
}

const MenuContext = createContext<MenuContextType>({
  openMenuId: -1,
  showOpenMenuById: () => {},
});

export const MenuProvider = ({ children }: Props) => {
  const [openMenuId, setOpenMenuId] = useState<number>(-1);

  const showOpenMenuById = (id: number) => {
    if (openMenuId === id) {
      setOpenMenuId(-1);
    } else {
      setOpenMenuId(id);
    }
  };
  return (
    <MenuContext.Provider value={{ openMenuId, showOpenMenuById }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
