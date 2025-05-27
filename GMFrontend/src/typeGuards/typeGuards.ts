export const isWorkoutDto = (data: unknown) => {
  return typeof data === "object" && data !== null && "exerciseDtos" in data;
};

export const isExerciseDto = (data: unknown) => {
  return typeof data === "object" && data !== null && "workoutId" in data;
};
