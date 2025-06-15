import ShowElementButton from "../components/buttons/ShowElementButton";
import Footer from "../components/footer/Footer";
import Title from "../components/form/Title";
import ErrorMessage from "../components/messages/ErrorMessage";
import InfoMessage from "../components/messages/InfoMessage";
import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import { useMod } from "../hooks/useMod";
import { useGetCurrentWorkouts } from "../hooks/workoutHooks/useGetCurrentWorkouts";

const WorkoutDashboard = () => {
  const { openModal } = useMod();
  const { data: workoutDtos, error, isLoading } = useGetCurrentWorkouts();
  console.log(workoutDtos);
  return (
    <>
      <Nav />

      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className=" flex justify-between items-baseline">
          <div className="flex items-baseline">
            <Title title="My Workouts" styles="text-[3rem]" />
          </div>
          <div className="flex items-baseline">
            <ShowElementButton
              styles="text-[3.5rem] text-text hover:text-white"
              content="+"
              showElement={() => openModal("ADD_WORKOUT")}
            />
          </div>
        </div>
        {isLoading && (
          <InfoMessage fontSize="[2rem]" message="Loading workouts..." />
        )}
        {error && <ErrorMessage message={error.message} fontSize="[2rem]" />}
        {workoutDtos && workoutDtos.length > 0 ? (
          <WorkoutList workoutDtos={workoutDtos} />
        ) : (
          !isLoading &&
          !error && (
            <p className="mt-[2rem] text-text  text-center text-[2rem]">
              No workouts to show
            </p>
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default WorkoutDashboard;
