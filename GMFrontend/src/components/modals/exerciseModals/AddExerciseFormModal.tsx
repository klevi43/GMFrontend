import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import AddOrUpdateExerciseForm from "../../form/exerciseForm/AddOrUpdateExerciseForm";
import type { SubmitHandler } from "react-hook-form";
import type { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import { useAddExercise } from "../../../hooks/exerciseHooks/useAddExercise";
import { useSearchParams } from "react-router";
import type { ExerciseInput } from "../../../types/inputTypes";

const AddExerciseFormModal = () => {
  const [searchParams] = useSearchParams();
  const workoutId = Number(searchParams.get("workoutId"));
  const onSubmit: SubmitHandler<ExerciseFormSchema> = async (
    data: ExerciseInput
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {}
  };
  const mutation = useAddExercise();
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <AddOrUpdateExerciseForm
            onSubmit={onSubmit}
            title="Add Exercise"
            defaultValues={{ name: "", workoutId: workoutId }}
            field={{ name: "name", label: "Exercise Name", type: "text" }}
            error={mutation.error}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AddExerciseFormModal;
