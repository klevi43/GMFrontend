import React, { useState } from "react";
import ShowElementButton from "../components/buttons/ShowElementButton";
import Footer from "../components/footer/Footer";
import Title from "../components/form/Title";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import workoutService from "../services/workoutService";
import { useGetWorkoutHistory } from "../hooks/workoutHooks/useGetWorkoutHistory";

const WorkoutHistory = () => {
  workoutService.getMWorkoutHistory(1);
  const [pageNo, setPageNo] = useState(1);
  const { data: workoutDtos, isLoading } = useGetWorkoutHistory(1, 1);

  console.log(hook);
  return (
    <div>
      <Nav />

      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className=" flex justify-between items-baseline">
          <div className="flex items-baseline">
            <Title title="My Workout History" styles="text-[3rem]" />
          </div>
        </div>

        {/* <WorkoutList /> */}
      </div>
      <Footer />
    </div>
  );
};

export default WorkoutHistory;
