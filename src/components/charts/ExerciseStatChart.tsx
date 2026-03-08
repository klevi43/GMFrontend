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
  dateRange: string;
  handleUpdateDateRange: (date: string) => void;
}
const ExerciseStatChart = ({
  data,
  dateRange,
  handleUpdateDateRange,
}: Props) => {
  const { closeModal } = useMod();
  const sortedData = data
    ? [...data]
        .map((d) => ({
          ...d,
          date: new Date(d.date).toLocaleDateString(), // e.g., "2/28/2026"
        }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : [];

  const initialEndDate =
    sortedData.length > 0
      ? new Date(sortedData[sortedData.length - 1].date)
      : new Date();

  const initialStartDate =
    sortedData.length > 0
      ? new Date(sortedData[sortedData.length - 1].date)
      : new Date();
  // initialStartDate.setMonth(initialStartDate.getMonth() - 3);

  // const [endDate, setEndDate] = useState<Date>(initialEndDate);
  // const [startDate, setStartDate] = useState<Date>(initialStartDate);

  // const handleEndDateChange = (date: Date) => {
  //   setEndDate(date);
  // };

  // const handleStartDateChange = (date: Date) => {
  //   setStartDate(date);
  // };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleUpdateDateRange(event?.target.value);
  };
  return (
    <>
      {data && (
        <Title
          styles="text-white font-bold text-[2.2rem] text-center"
          title={sortedData[0].exerciseName}
        />
      )}
      <div className="text-text self-end mb-2">
        <label>Range:</label>
        <select
          className="bg-modal"
          value={dateRange}
          onChange={handleSelectChange}
        >
          <option value="1_MONTH">1 Month</option>
          <option value="3_MONTHS">3 Months</option>
          <option value="6_MONTHS">6 Months</option>
          <option value="1_YEAR">1 Year</option>
        </select>
      </div>
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
          <XAxis dataKey="date" stroke="var(--color-text)" />
          <YAxis
            stroke="var(--color-text)"
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
