import React, { useState } from "react";
import ShowElementButton from "../components/buttons/ShowElementButton";
import Footer from "../components/footer/Footer";
import Title from "../components/form/Title";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";

import { useGetWorkoutHistory } from "../hooks/workoutHooks/useGetWorkoutHistory";
import { p } from "motion/react-client";
import PageSelector from "../components/pageSelector/PageSelector";
import InfoMessage from "../components/messages/InfoMessage";

const WorkoutHistory = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data: workoutDtos } = useGetWorkoutHistory(pageNo - 1);
  console.log(workoutDtos?.data);

  return (
    <div>
      <Nav />

      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className=" flex justify-between items-baseline">
          <div className="flex items-baseline">
            <Title title="My Workout History" styles="text-[3rem]" />
          </div>
        </div>
        <div className="text-text text-[1.2rem] mt-1 mb-3">
          <p>Workouts Completed: {workoutDtos?.data.totalElements}</p>
        </div>
        {workoutDtos && workoutDtos.data.content ? (
          <>
            <WorkoutList workoutDtos={workoutDtos?.data.content} />
            <PageSelector
              totalPages={workoutDtos?.data.totalPages}
              pageNo={pageNo}
              setPageNo={setPageNo}
            />
          </>
        ) : (
          <InfoMessage message="No Workouts to show" fontSize="[2rem]" />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WorkoutHistory;
