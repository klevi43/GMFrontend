import React, { useState } from "react";
import type Workout from "../../models/workout";
import WorkoutListItemDetails from "./WorkoutListItemDetails";
import WorkoutListItemOptionsButton from "./WorkoutListItemOptionsButton";

import WorkoutListItemMenuModal from "./WorkoutListItemMenuModal";
import DeleteItemModal from "../modals/DeleteItemModal";
import { useModal } from "../../hooks/useModal";
import { UPDATE } from "../../constants/workoutEndpoints";
import { DELETE_TYPE, UPDATE_TYPE } from "../../constants/modalConstants";

interface Props {
  workout: Workout;
}

const WorkoutListItem = ({ workout }: Props) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [editWorkoutFormIsVisible, setEditWorkoutFormIsVisivle] =
    useState(false);
  const showMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };
  const { openModal } = useModal();
  const handleOpenDeleteModalClick = () => {
    setMenuIsVisible(!menuIsVisible);

    openModal(DELETE_TYPE, workout);
  };
  const handleOpenUpdateModalClick = () => {
    setMenuIsVisible(!menuIsVisible);
    openModal(UPDATE_TYPE, workout);
  };

  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300">
        <div className=" border-l-8 border-primary text-text  bg-background  transition-all duration-300  hover:text-primary">
          <div className="flex justify-between items-center">
            <WorkoutListItemDetails workout={workout} />
            <div>
              {menuIsVisible && (
                <WorkoutListItemMenuModal
                  handleOpenUpdateModalClick={handleOpenUpdateModalClick}
                  handleOpenDeleteModalClick={handleOpenDeleteModalClick}
                />
              )}
              <WorkoutListItemOptionsButton showMenu={showMenu} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;
