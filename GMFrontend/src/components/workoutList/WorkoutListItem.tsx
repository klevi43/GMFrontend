import React, { useState } from "react";
import type Workout from "../../models/workout";
import WorkoutListItemDetails from "./WorkoutListItemDetails";
import WorkoutListItemOptionsButton from "./WorkoutListItemOptionsButton";
import EditButton from "../icons/EditButton";
import TrashCanButton from "../icons/TrashcanButton";
import { div } from "motion/react-client";
import WorkoutListItemMenuModal from "./WorkoutListItemMenuModal";

interface Props {
  workout: Workout;
}

const WorkoutListItem = ({ workout }: Props) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [editWorkoutFormIsVisible, setEditWorkoutFormIsVisivle] =
    useState(false);
  const [deleteWorkoutModalIsVisible, setDeleteWorkoutModalIsVisible] =
    useState(false);

  const showMenu = () => {
    console.log(menuIsVisible);
    setMenuIsVisible(!menuIsVisible);
  };

  const showEditWorkoutForm = () => {
    setEditWorkoutFormIsVisivle(!editWorkoutFormIsVisible);
  };

  const showDeleteWorkoutModal = () => {
    setDeleteWorkoutModalIsVisible(!deleteWorkoutModalIsVisible);
  };

  return (
    <>
      <li className="w-[100%] pb-2 hover:pl-4 transition-all duration-300">
        <div className=" border-l-8 border-primary text-text  bg-background  transition-all duration-300  hover:text-primary">
          <div className="flex justify-between items-center">
            <WorkoutListItemDetails workout={workout} />
            <div>
              {menuIsVisible && <WorkoutListItemMenuModal />}
              <WorkoutListItemOptionsButton showMenu={showMenu} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;
