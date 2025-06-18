import type ExerciseDto from "../../dtos/exerciseDto";

import { useMod } from "../../hooks/useMod";
import { useQueryParams } from "../../hooks/useQueryParams";
import SetList from "../setList/SetList";

import { useMenu } from "../../hooks/useMenu";
import ShowElementButton from "../buttons/ShowElementButton";
import ListItemMenuModal from "../ListItemMenuModal";
import ListItemOptionsButton from "../ListItemOptionsButton";
interface Props {
  exerciseDto: ExerciseDto;
}
const ExerciseListItem = ({ exerciseDto }: Props) => {
  console.log("ExerciseListItem rerendered: " + exerciseDto.name);
  const { openMenuId, showOpenMenuById } = useMenu();
  const { openModal } = useMod();
  const { setQueryParams } = useQueryParams();

  const handleOpenDeleteModalClick = () => {
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("DELETE_EXERCISE", exerciseDto);
  };

  const handleOpenUpdateModalClick = () => {
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("UPDATE_EXERCISE", exerciseDto);
  };

  const handleAddSetButtonClick = () => {
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("ADD_SET");
  };

  return (
    <li className="text-white  w-full px-[0.5rem]">
      <div className="flex justify-between items-center">
        <div className="text-[1.7rem]">{exerciseDto.name}</div>
        <div className="relative inline-block">
          {openMenuId === exerciseDto.id && (
            <ListItemMenuModal
              handleOpenUpdateModalClick={handleOpenUpdateModalClick}
              handleOpenDeleteModalClick={handleOpenDeleteModalClick}
            />
          )}
          <ListItemOptionsButton
            showMenu={showOpenMenuById}
            id={exerciseDto.id}
          />
        </div>
      </div>

      {exerciseDto.setDtos && exerciseDto.setDtos.length > 0 ? (
        <SetList setDtos={exerciseDto.setDtos} />
      ) : (
        <p className="text-text text-center text-[1.7rem] my-[2rem]">
          No sets to show
        </p>
      )}
      <ShowElementButton
        styles="text-primary text-[1.5rem] bg-modal border-2 border-primary mt-[0.5rem] mb-[1.5rem] py-2 w-full rounded-full hover:bg-background hover:scale-102 active:bg-primary active:text-black active:scale-95"
        content="Add Set"
        showElement={handleAddSetButtonClick}
      />
    </li>
  );
};

export default ExerciseListItem;
