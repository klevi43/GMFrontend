import { defaultButtonStyles } from "../../constants/styles";

interface Props {
  isSubmitting: boolean;
}
const FormSubmitButton = ({ isSubmitting }: Props) => {
  return (
    <>
      <button
        disabled={isSubmitting}
        className={`${defaultButtonStyles} disabled:opacity-50 disabled:cursor-not-allowed`}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};

export default FormSubmitButton;
