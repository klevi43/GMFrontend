import React from "react";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import AddOrUpdateExerciseForm from "../../form/exerciseForm/AddOrUpdateExerciseForm";
import { useUpdateExercise } from "../../../hooks/exerciseHooks/useUpdateExercise";
import { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import type { SubmitHandler } from "react-hook-form";
import type { ExerciseInput } from "../../../types/inputTypes";
import { useSearchParams } from "react-router";
interface Props {
  workoutId: number;
  exerciseId: number;
  exerciseInput: ExerciseInput;
}
const UpdateExerciseModal = ({
  workoutId,
  exerciseId,
  exerciseInput,
}: Props) => {
  const mutation = useUpdateExercise();
  const onSubmit: SubmitHandler<ExerciseFormSchema> = async (
    data: ExerciseInput
  ) => {
    try {
      await mutation.mutateAsync({ ...data, exerciseId, workoutId });
    } catch (error) {}
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <AddOrUpdateExerciseForm
            onSubmit={onSubmit}
            title="Update Exercise"
            defaultValues={{ name: exerciseInput.name, workoutId: workoutId }}
            field={{ name: "name", label: "Exercise Name", type: "text" }}
            error={mutation.error}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateExerciseModal;
