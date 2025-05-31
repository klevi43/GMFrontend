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

interface Props {
  workout: WorkoutDto;
}

const WorkoutListItem = React.memo(({ workout }: Props) => {
  // const [menuIsVisible, setMenuIsVisible] = useState(false);

  const { openMenuId, showOpenMenuById } = useMenu();

  const { openModal, setModalState } = useModal();
  const navigate = useNavigate();

  const handleOpenDeleteModalClick = useCallback(() => {
    showOpenMenuById(-1);
    openModal(DELETE_TYPE, workout, null, null);
  }, [openModal, workout]);

  const handleOpenUpdateModalClick = useCallback(() => {
    showOpenMenuById(-1);
    openModal(UPDATE_TYPE, workout, null, null);
  }, [openModal, workout]);
  const handleWorkoutItemClick = (workoutId: number) => {
    navigate(WORKOUTS_ENDPOINT + WORKOUT + `?workoutId=${workoutId}`);
    setModalState();
  };

  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300">
        <div className=" border-l-8 border-primary text-text  bg-background  transition-all duration-300  hover:text-primary">
          <div className="flex justify-between items-center">
            <button
              className="cursor-pointer"
              onClick={() => handleWorkoutItemClick(workout.id)}
            >
              <WorkoutListItemDetails workout={workout} />
            </button>

            <div>
              {openMenuId === workout.id && (
                <ListItemMenuModal
                  handleOpenUpdateModalClick={handleOpenUpdateModalClick}
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )}
              <ListItemOptionsButton
                showMenu={showOpenMenuById}
                id={workout.id}
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
});

export default WorkoutListItem;
