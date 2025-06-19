export interface MenuContextType {
  type: ItemType;
  openMenuId: number;
  showOpenMenu: (id: number, type: ItemType) => void;
}

export type ItemType = "WORKOUT" | "EXERCISE" | "SET" | undefined;
