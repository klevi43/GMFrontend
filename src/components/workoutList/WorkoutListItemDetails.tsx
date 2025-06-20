import type WorkoutDto from "../../dtos/workoutDto";
interface Props {
  workoutDto: WorkoutDto;
}
const WorkoutListItemDetails = ({ workoutDto }: Props) => {
  return (
    <>
      <div className="flex items-baseline pl-3 py-[1.5rem] ">
        <span className="font-bold  text-[2rem] max-w-[75%] overflow-hidden truncate">
          {workoutDto.name}
        </span>
        <span className="text-[2rem] px-2"> | </span>
        <span className="text-end text-[1.2rem]">{workoutDto.date}</span>
      </div>
    </>
  );
};

export default WorkoutListItemDetails;
