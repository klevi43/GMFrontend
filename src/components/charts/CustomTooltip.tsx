import type { ExerciseDataDto } from "../../types/chartTypes";
type TooltipPayload<T> = {
  payload: T;
  value: any;
  name: string;
}[];

interface CustomTooltipProps<T> {
  active?: boolean;
  payload?: TooltipPayload<T>;
  label?: string | number;
}
const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps<ExerciseDataDto>) => {
  if (!active || !payload || payload.length === 0) return null;
  const dataPoint = payload[0].payload as ExerciseDataDto;
  return (
    <div className="bg-white p-2 border shadow-md rounded text-sm">
      <p className="font-bold mb-1">{label}</p>

      <div className="flex flex-col gap-1">
        <span>
          <strong>Workout:</strong> {dataPoint.workoutName}
        </span>
        <span>
          <strong>Max Weight:</strong> {dataPoint.maxWeight}
        </span>
        <span>
          <strong>Reps:</strong> {dataPoint.reps}
        </span>
      </div>
    </div>
  );
};

export default CustomTooltip;
