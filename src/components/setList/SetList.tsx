import type SetDto from "../../dtos/setDto";
import SetListItem from "./SetListItem";

interface Props {
  setDtos: SetDto[];
}
const SetList = ({ setDtos }: Props) => {
  let index = 1;

  return (
    <>
      <ul className="">
        <SetListItem col1="No" col2="Weight" col3="Reps" />
        {setDtos.map((setDto) => (
          <SetListItem key={setDto.id} col1={index++} setDto={setDto} />
        ))}
      </ul>
    </>
  );
};

export default SetList;
