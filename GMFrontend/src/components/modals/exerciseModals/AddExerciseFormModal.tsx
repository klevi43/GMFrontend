import React from "react";
import ModalContainer from "../../containers/ModalContainer";
import FormContainer from "../../containers/FormContainer";
import ExerciseForm from "../../form/exerciseForm/ExerciseForm";
import type { SubmitHandler } from "react-hook-form";
import type { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import { useAddExercise } from "../../../hooks/exerciseHooks/useAddExercise";

import type { ExerciseInput } from "../../../types/inputTypes";

import { getWorkoutId } from "../../../utils/QueryParamHelpers";

const AddExerciseFormModal = () => {
  const mutation = useAddExercise();
  const workoutId = getWorkoutId();
  const onSubmit: SubmitHandler<ExerciseFormSchema> = async (
    data: ExerciseInput
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {}
  };

  return (
    <>
      <ModalContainer>
        <FormContainer>
          <ExerciseForm
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
