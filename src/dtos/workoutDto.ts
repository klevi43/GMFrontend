import type ExerciseDto from "./exerciseDto";

export default interface WorkoutDto {
  id: number;
  name: string;
  date: string;
  exerciseDtos: ExerciseDto[];
}
