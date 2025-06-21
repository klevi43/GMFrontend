import { createContext, useState } from "react";
import type { ItemType, MenuContextType } from "../types/menuContextType";
interface Props {
  children: React.ReactNode;
}

const MenuContext = createContext<MenuContextType>({
  type: undefined,
  openMenuId: -1,
  showOpenMenu: () => {},
});

export const MenuProvider = ({ children }: Props) => {
  const [openMenuId, setOpenMenuId] = useState<number>(-1);
  const [type, setType] = useState<ItemType | undefined>(undefined);
  const showOpenMenu = (id: number, type: ItemType) => {
    setOpenMenuId((prevId) => {
      return prevId === id ? -1 : id;
    });
    setType(type);
  };
  return (
    <MenuContext.Provider
      value={{ type, openMenuId, showOpenMenu: showOpenMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
