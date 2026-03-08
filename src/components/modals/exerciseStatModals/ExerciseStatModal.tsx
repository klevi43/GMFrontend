import { useState } from "react";
import { useGetExerciseStat } from "../../../hooks/exerciseStatHooks/useGetExerciseStat";
import type { ChartSettings } from "../../../types/chartTypes";
import ExerciseStatChart from "../../charts/ExerciseStatChart";
import ModalContainer from "../../containers/ModalContainer";
interface Props {
  exerciseName: string;
}
const ExerciseStatModal = ({ exerciseName }: Props) => {
  const d = new Date();
  const [dateRange, setDateRange] = useState<string>("1_MONTH");
  const chartSettings: ChartSettings = {
    exerciseName: exerciseName,
    dateRange: dateRange,
  };
  const { data } = useGetExerciseStat(chartSettings);

  const handleUpdateDateRange = (dateRange: string) => {
    setDateRange(dateRange);
  };
  return (
    <>
      <ModalContainer>
        <div
          className="relative
    mx-auto
    my-6
    w-[90vw]            
    max-w-[500px]       
    aspect-square        
    bg-modal
    rounded-sm
    border-modal-outline
    p-6
    flex
    flex-col
    justify-center"
        >
          {data && (
            <ExerciseStatChart
              data={data}
              dateRange={dateRange}
              handleUpdateDateRange={handleUpdateDateRange}
            />
          )}
        </div>
      </ModalContainer>
    </>
  );
};

export default ExerciseStatModal;
