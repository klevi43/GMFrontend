export interface ExerciseDataDto {
  id: number;
  exerciseName: string;
  workoutName: string;
  maxWeight: number;
  reps: number;
  date: Date;
}

export interface ChartSettings {
  exerciseName: string;
  dateRange: string;
}
