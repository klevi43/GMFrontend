import type { SubmitHandler } from "react-hook-form";
import { useAddWorkout } from "../../../hooks/workoutHooks/useAddWorkout";
import type { WorkoutFormSchema } from "../../../schemas/workoutFormSchema";
import type { WorkoutInput } from "../../../types/inputTypes";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import WorkoutForm from "../../form/workoutForm/WorkoutForm";

const AddWorkoutFormModal = () => {
  const onSubmit: SubmitHandler<WorkoutFormSchema> = async (
    data: WorkoutInput
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {}
  };
  const mutation = useAddWorkout();
  const note =
    "To log a new entry for an existing workout, enter its name and the new date. Older entries are in your Workout History.";
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <WorkoutForm
            onSubmit={onSubmit}
            title="Log New Workout"
            defaultValues={{ name: "", date: "" }}
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

export default AddWorkoutFormModal;
