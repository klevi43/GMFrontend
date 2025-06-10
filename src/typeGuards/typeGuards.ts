import type ExerciseDto from "../dtos/exerciseDto";
import type SetDto from "../dtos/setDto";
import type UserDto from "../dtos/userDto";
import type WorkoutDto from "../dtos/workoutDto";

export const isUserResponseDto = (data: unknown): data is UserDto => {
  return typeof data === "object" && data !== null && "email" in data;
};
export const isWorkoutDto = (data: unknown): data is WorkoutDto => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "name" in data &&
    "date" in data &&
    "exerciseDtos" in data
  );
};

export const isExerciseDto = (data: unknown): data is ExerciseDto => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof (data as any).id === "number" &&
    "name" in data &&
    "workoutId" in data &&
    Array.isArray((data as any).setDtos)
  );
};

export const isSetDto = (data: unknown): data is SetDto => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as any).id === "number" &&
    "weight" in data &&
    "reps" in data &&
    "exerciseId" in data
  );
};
