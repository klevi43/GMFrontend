import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import ShowElementButton from "../components/buttons/ShowElementButton";
import Title from "../components/form/Title";
import { useMod } from "../hooks/useMod";
import Footer from "../components/footer/Footer";
import { Link } from "react-router";
import { useGetCurrentWorkouts } from "../hooks/workoutHooks/useGetCurrentWorkouts";

const WorkoutDashboard = () => {
  const { openModal } = useMod();

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

        <WorkoutList useWorkoutQuery={useGetCurrentWorkouts} />
      </div>
      <Footer />
    </>
  );
};

export default WorkoutDashboard;
