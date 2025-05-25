import React, { useCallback, useState } from "react";
import type Workout from "../../models/workout";
import WorkoutListItemDetails from "./WorkoutListItemDetails";
import WorkoutListItemOptionsButton from "./WorkoutListItemOptionsButton";

import WorkoutListItemMenuModal from "./WorkoutListItemMenuModal";
import { useModal } from "../../hooks/useModal";

import { DELETE_TYPE, UPDATE_TYPE } from "../../constants/modalConstants";

interface Props {
  workout: Workout;
}

const WorkoutListItem = React.memo(({ workout }: Props) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const showMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };
  const { openModal } = useModal();
  const handleOpenDeleteModalClick = useCallback(() => {
    setMenuIsVisible(false);

    openModal(DELETE_TYPE, workout);
  }, [openModal, workout]);

  const handleOpenUpdateModalClick = useCallback(() => {
    setMenuIsVisible(false);
    openModal(UPDATE_TYPE, workout);
  }, [openModal, workout]);

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
});

export default WorkoutListItem;
