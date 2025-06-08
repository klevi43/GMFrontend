import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import { getExerciseId } from "../../../utils/QueryParamHelpers";
import { useAddSet } from "../../../hooks/setHooks/useAddSet";
import SetForm from "../../form/setForm/SetForm";
import type { SubmitHandler } from "react-hook-form";
import type { SetFormSchema } from "../../../schemas/setFormSchema";
import type { SetInput } from "../../../types/inputTypes";

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
            defaultValues={{ weight: 0, reps: 0, exerciseId: exerciseId }}
            fields={[
              { name: "weight", label: "Weight (Kg)" },
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
