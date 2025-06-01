import Nav from "../components/navbar/Nav";
import WorkoutList from "../components/workoutList/WorkoutList";
import ShowElementButton from "../components/buttons/ShowElementButton";
import Title from "../components/form/Title";
import { useMod } from "../hooks/useMod";
import Footer from "../components/footer/Footer";

const WorkoutDashboard = () => {
  const { openModal } = useMod();

  return (
    <div>
      <Nav />

      <div className="max-w-{1000px] w-[90%] mx-auto">
        <div className=" flex justify-between items-baseline">
          <Title title="Workout Dashboard" styles="text-[3rem]" />
          <ShowElementButton
            styles="text-[3.5rem] text-text hover:text-white"
            content="+"
            showElement={() => openModal("ADD_WORKOUT")}
          />
        </div>
      </div>
      <WorkoutList />
      <Footer />
    </div>
  );
};

export default WorkoutDashboard;
