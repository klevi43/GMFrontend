import type WorkoutDto from "../../dtos/workoutDto";
interface Props {
  workoutDto: WorkoutDto;
}
const WorkoutListItemDetails = ({ workoutDto }: Props) => {
  return (
    <>
      <div className="flex items-baseline px-3 py-[1.5rem] overflow-hidden">
        <span className="font-bold  text-[2rem]">{workoutDto.name}</span>
        <span className="text-[2rem] px-2"> | </span>
        <span className=" text-end text-[1.2rem] truncate">
          {workoutDto.date}
        </span>
      </div>
    </>
  );
};

export default WorkoutListItemDetails;
