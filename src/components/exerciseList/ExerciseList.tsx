import type ExerciseDto from "../../dtos/exerciseDto";
import ExerciseListItem from "./ExerciseListItem";
interface Props {
  exerciseDtos: ExerciseDto[];
}
const ExerciseList = ({ exerciseDtos }: Props) => {
  if (exerciseDtos.length == 0)
    return <p className="text-text">No exercises yet </p>;
  return (
    <>
      <ul className="">
        {exerciseDtos.map((exerciseDto) => (
          <ExerciseListItem key={exerciseDto.id} exerciseDto={exerciseDto} />
        ))}
      </ul>
    </>
  );
};

export default ExerciseList;
