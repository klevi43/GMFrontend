import { useGetExerciseStat } from "../../../hooks/exerciseStatHooks/useGetExerciseStat";
import ExerciseStatChart from "../../charts/ExerciseStatChart";
import ModalContainer from "../../containers/ModalContainer";
interface Props {
  exerciseName: string;
}
const ExerciseStatModal = ({ exerciseName }: Props) => {
  const { data } = useGetExerciseStat(exerciseName);
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
          {data && <ExerciseStatChart data={data} />}
        </div>
      </ModalContainer>
    </>
  );
};

export default ExerciseStatModal;
