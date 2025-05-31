import React, { useCallback, useState } from "react";
import type WorkoutDto from "../../dtos/workoutDto";
import WorkoutListItemDetails from "./WorkoutListItemDetails";
import ListItemOptionsButton from "./ListItemOptionsButton";

import ListItemMenuModal from "./ListItemMenuModal";
import { useModal } from "../../hooks/useModal";

import { DELETE_TYPE, UPDATE_TYPE } from "../../constants/modalConstants";
import { Link, useNavigate } from "react-router";
import { WORKOUT, WORKOUTS_ENDPOINT } from "../../constants/endpoints";
import { useGetWorkout } from "../../hooks/workoutHooks/useGetWorkout";
import workoutService from "../../services/workoutService";
import { useMenu } from "../../hooks/useMenu";
import { useMod } from "../../hooks/useMod";
import { useQueryParams } from "../../hooks/useQueryParams";

interface Props {
  workoutDto: WorkoutDto;
}

const WorkoutListItem = React.memo(({ workoutDto }: Props) => {
  // const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { openMenuId, showOpenMenuById } = useMenu();

  //const { openModal } = useModal();
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
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300">
        <div className=" border-l-8 border-primary text-text  bg-background  transition-all duration-300  hover:text-primary">
          <div className="flex justify-between items-center">
            <button
              className="cursor-pointer"
              onClick={() => handleWorkoutItemClick(workoutDto.id)}
            >
              <WorkoutListItemDetails workoutDto={workoutDto} />
            </button>

            <div>
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
});

export default WorkoutListItem;
