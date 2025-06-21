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
  const { type, openMenuId, showOpenMenu } = useMenu();
  const { openModal } = useMod();
  const { setQueryParams } = useQueryParams();

  const handleOpenDeleteModalClick = () => {
    showOpenMenu(-1, undefined);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("DELETE_EXERCISE", exerciseDto);
  };

  const handleOpenUpdateModalClick = () => {
    showOpenMenu(-1, undefined);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("UPDATE_EXERCISE", exerciseDto);
  };

  const handleAddSetButtonClick = () => {
    showOpenMenu(-1, undefined);
    setQueryParams({ exerciseId: exerciseDto.id });
    openModal("ADD_SET");
  };

  return (
    <li className="text-white  w-full px-[0.5rem]">
      <div className="flex justify-between items-center">
        <div className="text-[1.7rem]">{exerciseDto.name}</div>
        <div className="relative inline-block">
          {openMenuId === exerciseDto.id && type === "EXERCISE" && (
            <ListItemMenuModal
              handleOpenUpdateModalClick={handleOpenUpdateModalClick}
              handleOpenDeleteModalClick={handleOpenDeleteModalClick}
            />
          )}

          <ListItemOptionsButton
            showMenu={showOpenMenu}
            id={exerciseDto.id}
            type="EXERCISE"
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
        styles="text-primary text-[1.5rem] bg-modal border-2 border-primary mt-[0.5rem] mb-[1.5rem] py-2 w-full rounded-full hover:bg-background hover:scale-102 transform-gpu will-change-transform active:bg-primary active:text-black active:scale-95"
        content="Add Set"
        showElement={handleAddSetButtonClick}
      />
    </li>
  );
};

export default ExerciseListItem;
