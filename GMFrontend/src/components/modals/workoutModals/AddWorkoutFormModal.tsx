import React from "react";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import WorkoutForm from "../../form/workoutForm/WorkoutForm";
import { useAddWorkout } from "../../../hooks/workoutHooks/useAddWorkout";
import type { SubmitHandler } from "react-hook-form";
import type { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutInput } from "../../../types/inputTypes";

const AddWorkoutFormModal = () => {
  const onSubmit: SubmitHandler<WorkoutFormSchema> = async (
    data: WorkoutInput
  ) => {
    //console.log(JSON.stringify(data));
    try {
      await mutation.mutateAsync(data);
    } catch (error) {}
  };
  const mutation = useAddWorkout();
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <WorkoutForm
            onSubmit={onSubmit}
            title="Add Workout"
            defaultValues={{ name: "", date: "" }}
            fields={[
              { name: "name", label: "Workout Name", type: "text" },
              { name: "date", label: "Date completed", type: "date" },
            ]}
            error={mutation.error}
            isSuccess={mutation.isSuccess}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AddWorkoutFormModal;
