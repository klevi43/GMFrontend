import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useGetExerciseStat } from "../../hooks/exerciseStatHooks/useGetExerciseStat";
const ExerciseStatChart = () => {
  const { data } = useGetExerciseStat("Bench Press");
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={400} data={data}>
        <XAxis dataKey="date" />
        <YAxis
          dataKey="maxWeight"
          // this tell recharts that the min value for the data should be
          // 5 units below dataMin, but never below 0
          domain={[(dataMin) => Math.max(dataMin - 5, 0), "dataMax"]}
        />
        <Line className="" color="bg-primary" dataKey="maxWeight" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExerciseStatChart;
