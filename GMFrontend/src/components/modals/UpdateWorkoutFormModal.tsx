import React from "react";
import FormContainer from "../containers/FormContainer";
import ModalContainer from "../containers/ModalContainer";
import AddOrUpdateWorkoutForm from "../form/addWorkoutForm/AddOrUpdateWorkoutForm";
import type { SubmitHandler } from "react-hook-form";
import type { WorkoutFormSchema } from "../../schemas/WorkoutFormSchema";
import type { WorkoutInput } from "../../types/inputTypes";
import { useUpdateWorkout } from "../../hooks/workoutHooks/useUpdateWorkout";
interface Props {
  showUpdateWorkoutFormModal: () => void;
}
const UpdateWorkoutFormModal = ({ showUpdateWorkoutFormModal }: Props) => {
  const onSubmit: SubmitHandler<WorkoutFormSchema> = (data: WorkoutInput) => {
    mutation.mutate(data);
  };

  const mutation = useUpdateWorkout();
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <AddOrUpdateWorkoutForm
            showForm={showUpdateWorkoutFormModal}
            onSubmit={onSubmit}
            title="Add Workout"
            defaultValues={{ name: "", date: "" }}
            fields={[
              { name: "name", label: "Workout Name", type: "text" },
              { name: "date", label: "Date completed", type: "date" },
            ]}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateWorkoutFormModal;
