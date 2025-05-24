import type Exercise from "./exercise";

export default interface Workout {
  id: number;
  name: string;
  date: string;
  exercises?: Exercise[];
}
