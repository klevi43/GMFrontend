import { useQueryParams } from "../hooks/useQueryParams";

const getQueryParams = () => {
  const { queryParams } = useQueryParams();
  if (!queryParams) {
    throw new Error("Query Params not set in context");
  }
  return queryParams;
};
export const getWorkoutId = (): number => {
  const queryParams = getQueryParams();
  if (!queryParams.workoutId) {
    throw new Error("Workout Id not set in context");
  }
  return queryParams.workoutId;
};

export const getExerciseId = (): number => {
  const queryParams = getQueryParams();
  if (!queryParams.exerciseId) {
    throw new Error("Exercise Id not set in context");
  }
  return queryParams.exerciseId;
};

export const getSetId = (): number => {
  const queryParams = getQueryParams();
  if (!queryParams.setId) {
    throw new Error("Set Id not set in context");
  }
  return queryParams.setId;
};
