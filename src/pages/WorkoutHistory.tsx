import { useState } from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/form/Title";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";

import ErrorMessage from "../components/messages/ErrorMessage";
import InfoMessage from "../components/messages/InfoMessage";
import PageSelector from "../components/pageSelector/PageSelector";
import { useGetWorkoutHistory } from "../hooks/workoutHooks/useGetWorkoutHistory";

const WorkoutHistory = () => {
  const [pageNo, setPageNo] = useState(1);
  const {
    data: workoutDtos,
    error,
    isLoading,
  } = useGetWorkoutHistory(pageNo - 1);

  return (
    <div>
      <Nav />

      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className=" flex justify-between items-baseline">
          <div className="flex items-baseline">
            <Title title="My Workout History" styles="text-[3rem]" />
          </div>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center min-h-[6rem]">
            <InfoMessage fontSize="[2rem]" message="Loading workouts..." />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center min-h-[6rem]">
            <ErrorMessage message={error.message} fontSize="[2rem]" />
          </div>
        )}

        {workoutDtos && workoutDtos.data.content ? (
          <>
            <div className="text-text text-[1.2rem] mt-1 mb-3">
              <p>Workouts Completed: {workoutDtos?.data.totalElements}</p>
            </div>
            <WorkoutList workoutDtos={workoutDtos?.data.content} />
            {workoutDtos.data.totalPages > 1 && (
              <PageSelector
                totalPages={workoutDtos?.data.totalPages}
                pageNo={pageNo}
                setPageNo={setPageNo}
              />
            )}
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
