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
  const showOpenMenu = (newId: number, newType: ItemType) => {
    setOpenMenuId((prevId) => {
      console.log("PrevId: " + prevId);
      console.log("newId: " + newId);
      console.log("type: " + type);
      console.log("NewType: " + newType);
      console.log(
        "Result of conditional: " +
          (prevId === newId && newType === type ? -1 : newId)
      );
      return prevId === newId && newType === type ? -1 : newId;
    });
    setType(newType);

    console.log("Final Id: " + openMenuId);
    console.log("Final type: " + type);
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
