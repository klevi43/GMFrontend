import type Exercise from "./exercise";

export default interface WorkoutDto {
  id: number;
  name: string;
  date: string;
  exerciseDtos: Exercise[];
}
