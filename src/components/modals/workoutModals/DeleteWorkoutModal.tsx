import FormContainer from "../../containers/FormContainer";

import type WorkoutDto from "../../../dtos/workoutDto";
import { useMod } from "../../../hooks/useMod";
import { useDeleteWorkout } from "../../../hooks/workoutHooks/useDeleteWorkout";
import DeleteButton from "../../buttons/DeleteButton";
import ModalContainer from "../../containers/ModalContainer";
import Title from "../../form/Title";
import ErrorMessage from "../../messages/ErrorMessage";
import SuccessMessage from "../../messages/SuccessMessage";
import ModalCloseButton from "../ModalCloseButton";

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
            <div className="absolute -top-5 right-0">
              <ModalCloseButton content="X" closeModal={closeModal} />
            </div>
            <div className="w-full">
              <div className="flex flex-col justify-center items-center mx-auto">
                <Title title={`Delete Workout`} />
                {mutation.error instanceof Error && (
                  <ErrorMessage
                    fontSize="1rem"
                    message={mutation.error.message}
                  />
                )}
                {mutation.isSuccess && <SuccessMessage fontSize="[1rem]" />}
                <p className="text-text text-[1.2rem] mb-2 text-center">
                  Are you sure you want to delete this workout?
                </p>
                <p className="text-text text-[1rem] mb-2 text-center">
                  Any previous entries of this workout in your workout history{" "}
                  <span className="font-bold">will not be deleted.</span>
                </p>
                <h4 className="text-white text-[2rem] font-bold mb-5 ">
                  {initialData.name}
                </h4>

                <p className="text-red-500 mb-3 text-center">
                  This will delete all exercises and sets in this workout.
                </p>

                <div className="w-full">
                  <DeleteButton
                    isSuccess={mutation.isSuccess}
                    isPending={mutation.isPending}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                  />
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
