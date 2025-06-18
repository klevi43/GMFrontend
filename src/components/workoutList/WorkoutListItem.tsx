import { useCallback } from "react";
import { useNavigate } from "react-router";
import { WORKOUT, WORKOUTS_ENDPOINT } from "../../constants/endpoints";
import type WorkoutDto from "../../dtos/workoutDto";
import { useMenu } from "../../hooks/useMenu";
import { useMod } from "../../hooks/useMod";
import { useQueryParams } from "../../hooks/useQueryParams";
import ListItemMenuModal from "../ListItemMenuModal";
import ListItemOptionsButton from "../ListItemOptionsButton";
import WorkoutListItemDetails from "./WorkoutListItemDetails";

interface Props {
  workoutDto: WorkoutDto;
}

const WorkoutListItem = ({ workoutDto }: Props) => {
  const { openMenuId, showOpenMenuById } = useMenu();

  const navigate = useNavigate();
  const { openModal } = useMod();
  const { setQueryParams } = useQueryParams();
  const handleOpenDeleteModalClick = useCallback(() => {
    showOpenMenuById(-1);
    setQueryParams({ workoutId: workoutDto.id });
    openModal("DELETE_WORKOUT", workoutDto);
  }, [showOpenMenuById, setQueryParams, openModal, workoutDto]);

  const handleOpenUpdateModalClick = useCallback(() => {
    showOpenMenuById(-1);
    setQueryParams({ workoutId: workoutDto.id });
    openModal("UPDATE_WORKOUT", workoutDto);
  }, [showOpenMenuById, setQueryParams, openModal, workoutDto]);
  const handleWorkoutItemClick = (workoutId: number) => {
    setQueryParams({ workoutId: workoutDto.id });
    navigate(WORKOUTS_ENDPOINT + WORKOUT + `?workoutId=${workoutId}`);
  };

  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300 active:pl-5">
        <div className="border-l-8 border-primary text-text  bg-background  transition-all duration-300  hover:text-primary active:text-primary">
          <div className="flex justify-between items-center">
            <button
              className="cursor-pointer"
              onClick={() => handleWorkoutItemClick(workoutDto.id)}
            >
              <WorkoutListItemDetails workoutDto={workoutDto} />
            </button>

            <div className="relative">
              {openMenuId === workoutDto.id && (
                <ListItemMenuModal
                  handleOpenUpdateModalClick={handleOpenUpdateModalClick}
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )}
              <ListItemOptionsButton
                showMenu={showOpenMenuById}
                id={workoutDto.id}
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;
