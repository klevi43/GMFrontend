import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import ExerciseForm from "../../form/exerciseForm/ExerciseForm";
import { ExerciseFormSchema } from "../../../schemas/exerciseFormSchema";
import type { SubmitHandler } from "react-hook-form";
import type { ExerciseInput } from "../../../types/inputTypes";

import type ExerciseDto from "../../../dtos/exerciseDto";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { getWorkoutId } from "../../../utils/QueryParamHelpers";
import { useUpdateExercise } from "../../../hooks/exerciseHooks/useUpdateExercise";
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
