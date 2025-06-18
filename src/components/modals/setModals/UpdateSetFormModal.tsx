import type { SubmitHandler } from "react-hook-form";
import type SetDto from "../../../dtos/setDto";
import { useUpdateSet } from "../../../hooks/setHooks/useUpdateSet";
import { useQueryParams } from "../../../hooks/useQueryParams";
import type { SetFormSchema } from "../../../schemas/setFormSchema";
import type { SetInput } from "../../../types/inputTypes";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import SetForm from "../../form/setForm/SetForm";

interface Props {
  initialData: SetDto;
}
const UpdateSetFormModal = ({ initialData }: Props) => {
  const mutation = useUpdateSet();
  const { setQueryParams } = useQueryParams();

  const onSubmit: SubmitHandler<SetFormSchema> = async (data: SetInput) => {
    try {
      setQueryParams({
        exerciseId: initialData.exerciseId,
        setId: initialData.id,
      });
      await mutation.mutateAsync(data);
    } catch (error) {}
  };

  return (
    <div>
      <ModalContainer>
        <FormContainer>
          <SetForm
            onSubmit={onSubmit}
            title="Edit Set"
            defaultValues={{
              weight: initialData.weight,
              reps: initialData.reps,
              exerciseId: initialData.exerciseId,
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
    </div>
  );
};

export default UpdateSetFormModal;
