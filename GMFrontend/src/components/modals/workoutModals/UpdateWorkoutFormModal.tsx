import React from "react";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import WorkoutForm from "../../form/workoutForm/WorkoutForm";
import type { SubmitHandler } from "react-hook-form";
import type { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutInput } from "../../../types/inputTypes";
import { useUpdateWorkout } from "../../../hooks/workoutHooks/useUpdateWorkout";
import type WorkoutDto from "../../../dtos/workoutDto";
import { useQueryParams } from "../../../hooks/useQueryParams";
interface Props {
  initialData: WorkoutDto;
}
const UpdateWorkoutFormModal = ({ initialData }: Props) => {
  const onSubmit: SubmitHandler<WorkoutFormSchema> = async (
    data: WorkoutInput
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {}
  };

  const mutation = useUpdateWorkout();
  const { setQueryParams } = useQueryParams();
  setQueryParams({ workoutId: initialData.id });
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <WorkoutForm
            onSubmit={onSubmit}
            title="Edit Workout"
            defaultValues={{
              name: initialData.name,
              date: initialData.date,
            }}
            fields={[
              { name: "name", label: "Workout Name", type: "text" },
              { name: "date", label: "Date completed", type: "date" },
            ]}
            error={mutation.error}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateWorkoutFormModal;
