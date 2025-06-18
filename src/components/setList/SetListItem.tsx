import type SetDto from "../../dtos/setDto";
import { useMenu } from "../../hooks/useMenu";
import { useMod } from "../../hooks/useMod";
import { useQueryParams } from "../../hooks/useQueryParams";
import ListItemMenuModal from "../ListItemMenuModal";
import ListItemOptionsButton from "../ListItemOptionsButton";
interface Props {
  col1: string | number;
  col2?: string;
  col3?: string;
  setDto?: SetDto;
}
const SetListItem = ({ col1, col2, col3, setDto }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();
  const { setQueryParams } = useQueryParams();
  const { openModal } = useMod();

  const handleOpenUpdateModalClick = () => {
    if (!setDto) throw new Error("No set data");
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: setDto.exerciseId, setId: setDto.id });
    openModal("UPDATE_SET", setDto);
  };
  const handleOpenDeleteModalClick = () => {
    if (!setDto) throw new Error("No set data");
    showOpenMenuById(-1);
    setQueryParams({ exerciseId: setDto.exerciseId, setId: setDto.id });
    openModal("DELETE_SET", setDto);
  };
  return (
    <li className="  w-full text-text ">
      <div className="grid grid-cols-4 items-center w-full text-[1.5rem] min-h-[3.5rem]">
        <div className="text-center">{col1}</div>
        <div className="text-center">{col2 ? col2 : setDto?.weight}</div>
        <div className="text-center">{col3 ? col3 : setDto?.reps}</div>
        {setDto ? (
          <div className="flex justify-center">
            <div className="relative inline-block text-[1rem]">
              {setDto && openMenuId === setDto?.id && (
                <ListItemMenuModal
                  handleOpenUpdateModalClick={handleOpenUpdateModalClick}
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )}
              <ListItemOptionsButton
                id={setDto.id}
                showMenu={showOpenMenuById}
              />
            </div>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </li>
  );
};

export default SetListItem;
