import React from "react";
import FormContainer from "../containers/FormContainer";
import ModalContainer from "../containers/ModalContainer";
import AddOrUpdateWorkoutForm from "../form/addWorkoutForm/AddOrUpdateWorkoutForm";
import type { SubmitHandler } from "react-hook-form";
import type { WorkoutFormSchema } from "../../schemas/WorkoutFormSchema";
import type { WorkoutInput } from "../../types/inputTypes";
import { useUpdateWorkout } from "../../hooks/workoutHooks/useUpdateWorkout";
import { useModal } from "../../hooks/useModal";

const UpdateWorkoutFormModal = () => {
  const onSubmit: SubmitHandler<WorkoutFormSchema> = (data: WorkoutInput) => {
    mutation.mutate(data);
  };
  const { data } = useModal();
  const mutation = useUpdateWorkout();
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <AddOrUpdateWorkoutForm
            onSubmit={onSubmit}
            title="Edit Workout"
            defaultValues={{
              name: data ? data.name : "",
              date: data ? data.date : "",
            }}
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
