import React from "react";
import FormContainer from "../containers/FormContainer";
import ModalContainer from "../containers/ModalContainer";
import AddWorkoutForm from "../form/addWorkoutForm/addWorkoutForm";
import { useAddWorkout } from "../../hooks/workoutHooks/useAddWorkout";
import type { SubmitHandler } from "react-hook-form";
import type { AddWorkoutFormSchema } from "../../schemas/addWorkoutFormSchema";
import type { WorkoutInput } from "../../types/inputTypes";
interface Props {
  showAddWorkoutFormModal: () => void;
}
const AddWorkoutFormModal = ({ showAddWorkoutFormModal }: Props) => {
  const onSubmit: SubmitHandler<AddWorkoutFormSchema> = (
    data: WorkoutInput
  ) => {
    //console.log(JSON.stringify(data));

    mutation.mutate(data);
  };
  const mutation = useAddWorkout();
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <AddWorkoutForm
            showForm={showAddWorkoutFormModal}
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

export default AddWorkoutFormModal;
