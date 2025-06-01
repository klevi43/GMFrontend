import FormContainer from "../../containers/FormContainer";

import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ModalCloseButton from "./ModalCloseButton";
import { useMod } from "../../../hooks/useMod";
import type WorkoutDto from "../../../dtos/workoutDto";
import { useDeleteWorkout } from "../../../hooks/workoutHooks/useDeleteWorkout";

interface Props {
  initialData: WorkoutDto;
}
const DeleteWorkoutModal = ({ initialData }: Props) => {
  const { closeModal } = useMod();
  const mutation = useDeleteWorkout();

  const handleDeleteButtonClick = async () => {
    try {
      mutation.mutateAsync(initialData.id);
    } catch (error) {}
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <div className="relative">
            <ModalCloseButton closeModal={closeModal} />
            <div className="w-full">
              <div className="flex flex-col justify-center items-center mx-auto">
                <Title title={`Delete Workout`} />
                <p className="text-text text-[1.2rem] mb-2 text-center">
                  Are you sure you want to delete this workout?
                </p>
                <h4 className="text-white text-[2rem] font-bold mb-5 ">
                  {initialData.name}
                </h4>

                <p className="text-red-500 mb-4 text-center">
                  This will delete all exercises and sets in this workout
                </p>

                <div className="w-full">
                  <button
                    onClick={handleDeleteButtonClick}
                    className="bg-primary text-[1.5rem] rounded-lg w-full py-2 hover:bg-red-500 hover:text-white hover:cursor-pointer transition-all duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default DeleteWorkoutModal;
