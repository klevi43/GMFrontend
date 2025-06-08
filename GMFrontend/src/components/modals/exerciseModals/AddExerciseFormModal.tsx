import type { SubmitHandler } from "react-hook-form";
import { useAddExercise } from "../../../hooks/exerciseHooks/useAddExercise";
import type { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import ExerciseForm from "../../form/exerciseForm/ExerciseForm";

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
            isSuccess={mutation.isSuccess}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AddExerciseFormModal;
