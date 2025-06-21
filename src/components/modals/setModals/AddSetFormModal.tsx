import type { SubmitHandler } from "react-hook-form";
import { useAddSet } from "../../../hooks/setHooks/useAddSet";
import type { SetFormSchema } from "../../../schemas/setFormSchema";
import type { SetInput } from "../../../types/inputTypes";
import { getExerciseId } from "../../../utils/QueryParamHelpers";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import SetForm from "../../form/setForm/SetForm";

const AddSetFormModal = () => {
  const mutation = useAddSet();
  const exerciseId = getExerciseId();
  const onSubmit: SubmitHandler<SetFormSchema> = async (data: SetInput) => {
    try {
      mutation.mutateAsync(data);
    } catch (error) {}
  };
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <SetForm
            onSubmit={onSubmit}
            title="Add Set"
            defaultValues={{
              weight: undefined,
              reps: undefined,
              exerciseId: exerciseId,
            }}
            fields={[
              { name: "weight", label: "Weight (lbs)" },
              { name: "reps", label: "Reps" },
            ]}
            error={mutation.error}
            isSuccess={mutation.isSuccess}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AddSetFormModal;
