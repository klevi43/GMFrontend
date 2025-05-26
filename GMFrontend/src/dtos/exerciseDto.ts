import type SetDto from "./setDto";

export default interface ExerciseDto {
  id: number;
  name: string;
  sets: SetDto[];
  workoutId: number;
}
