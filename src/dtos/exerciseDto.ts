import type SetDto from "./setDto";

export default interface ExerciseDto {
  id: number;
  name: string;
  setDtos: SetDto[];
  workoutId: number;
}
