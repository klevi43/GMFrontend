import type ExerciseDto from "../dtos/exerciseDto";
import type WorkoutDto from "../dtos/workoutDto";
import type { ExerciseInput, WorkoutInput } from "../types/inputTypes";

export const mapToExerciseInput = (data: ExerciseDto): ExerciseInput => {
  return { name: data.name, workoutId: data.workoutId };
};

export const mapToWorkoutInput = (data: WorkoutDto): WorkoutInput => {
  return { name: data.name, date: data.date };
};
