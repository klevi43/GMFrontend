import type { SubmitHandler } from "react-hook-form";
import { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import type { ExerciseInput } from "../../../types/inputTypes";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import ExerciseForm from "../../form/exerciseForm/ExerciseForm";

import type ExerciseDto from "../../../dtos/exerciseDto";
import { useUpdateExercise } from "../../../hooks/exerciseHooks/useUpdateExercise";
import { getWorkoutId } from "../../../utils/QueryParamHelpers";
interface Props {
  initialData: ExerciseDto;
}
const UpdateExerciseFormModal = ({ initialData }: Props) => {
  const mutation = useUpdateExercise();
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
            title="Update Exercise"
            defaultValues={{ name: initialData.name, workoutId: workoutId }}
            field={{ name: "name", label: "Exercise Name", type: "text" }}
            error={mutation.error}
            isSuccess={mutation.isSuccess}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateExerciseFormModal;
