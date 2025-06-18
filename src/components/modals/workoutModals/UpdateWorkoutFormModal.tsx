import type { SubmitHandler } from "react-hook-form";
import type WorkoutDto from "../../../dtos/workoutDto";
import { useUpdateWorkout } from "../../../hooks/workoutHooks/useUpdateWorkout";
import type { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutInput } from "../../../types/inputTypes";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import WorkoutForm from "../../form/workoutForm/WorkoutForm";
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
  const note =
    "Note: Changing the name of a workout will affect all other workouts with the same name.";
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
            note={note}
            error={mutation.error}
            isSuccess={mutation.isSuccess}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default UpdateWorkoutFormModal;
