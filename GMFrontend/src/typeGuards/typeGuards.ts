export const isUserResponseDto = (data: unknown) => {
  return typeof data === "object" && data !== null && "email" in data;
};
export const isWorkoutDto = (data: unknown) => {
  return typeof data === "object" && data !== null && "exerciseDtos" in data;
};

export const isExerciseDto = (data: unknown) => {
  return typeof data === "object" && data !== null && "workoutId" in data;
};

export const isSetDto = (data: unknown) => {
  return typeof data === "object" && data !== null && "exerciseId" in data;
};
