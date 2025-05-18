import type Set from "./set";

export default interface Exercise {
  id?: number;
  name?: string;
  sets?: Set[];
}
