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
  const { type, openMenuId, showOpenMenu } = useMenu();

  const navigate = useNavigate();
  const { openModal } = useMod();
  const { setQueryParams } = useQueryParams();
  const handleOpenDeleteModalClick = useCallback(() => {
    showOpenMenu(-1, undefined);
    setQueryParams({ workoutId: workoutDto.id });
    openModal("DELETE_WORKOUT", workoutDto);
  }, [showOpenMenu, setQueryParams, openModal, workoutDto]);

  const handleOpenUpdateModalClick = useCallback(() => {
    showOpenMenu(-1, undefined);
    setQueryParams({ workoutId: workoutDto.id });
    openModal("UPDATE_WORKOUT", workoutDto);
  }, [showOpenMenu, setQueryParams, openModal, workoutDto]);
  const handleWorkoutItemClick = (workoutId: number) => {
    showOpenMenu(-1, undefined);
    setQueryParams({ workoutId: workoutDto.id });
    navigate(WORKOUTS_ENDPOINT + WORKOUT + `?workoutId=${workoutId}`);
  };

  return (
    <>
      <li className="w-[100%] flex justify-between items-baseline pb-2  text-text hover:pl-4 hover:text-primary transition-all duration-180">
        <div className="active:pl-5 transition-all duration-200">
          <div className="border-l-8 border-primary  bg-background  transition-all duration-180  active:text-primary">
            <button
              className="cursor-pointer"
              onClick={() => handleWorkoutItemClick(workoutDto.id)}
            >
              <WorkoutListItemDetails workoutDto={workoutDto} />
            </button>
          </div>
        </div>

        <div className="relative">
          {openMenuId === workoutDto.id && type === "WORKOUT" && (
            <ListItemMenuModal
              handleOpenUpdateModalClick={handleOpenUpdateModalClick}
              handleOpenDeleteModalClick={handleOpenDeleteModalClick}
            />
          )}
          <ListItemOptionsButton
            showMenu={showOpenMenu}
            id={workoutDto.id}
            type="WORKOUT"
          />
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;
