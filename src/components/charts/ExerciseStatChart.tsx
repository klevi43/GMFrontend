import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useMod } from "../../hooks/useMod";
import type { ExerciseDataDto } from "../../types/chartTypes";
import Title from "../form/Title";
import ModalCloseButton from "../modals/ModalCloseButton";
import CustomTooltip from "./CustomTooltip";
interface Props {
  data?: ExerciseDataDto[];
}
const ExerciseStatChart = ({ data }: Props) => {
  const { closeModal } = useMod();
  const sortedData = data
    ? [...data]
        .map((d) => ({
          ...d,
          date: new Date(d.date).toLocaleDateString(), // e.g., "2/28/2026"
        }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : [];

  return (
    <>
      {data && <Title title={sortedData[0].exerciseName} />}
      <div className="absolute top-4 right-6">
        <ModalCloseButton content="X" closeModal={closeModal} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          responsive
          data={sortedData}
          margin={{
            top: 5,
            right: 30,
            left: -10,
            bottom: 5,
          }}
        >
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="date" />
          <YAxis
            dataKey="maxWeight"
            // this tell recharts that the min value for the data should be
            // 5 units below dataMin, but never below 0
            domain={[
              (dataMin: number) => Math.max(dataMin - dataMin * 0.05, 0),
              (dataMax: number) => dataMax + dataMax * 0.05,
            ]}
          />
          <Line
            activeDot={{
              fill: "var(--color-primary)",
              stroke: "var(--color-primary)",
            }}
            stroke="#acacac"
            dataKey="maxWeight"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ExerciseStatChart;
