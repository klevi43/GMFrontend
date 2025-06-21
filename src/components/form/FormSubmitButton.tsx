interface Props {
  isSubmitting: boolean;
}
const FormSubmitButton = ({ isSubmitting }: Props) => {
  return (
    <>
      <button
        disabled={isSubmitting}
        className="mt-3 p-2.5 w-full text-[1.5rem] hover:scale-102 transform-gpu will-change-transform bg-primary border-2 rounded-2xl transition-all duration-150 active:bg-modal active:text-primary active:border-primary active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </>
  );
};

export default FormSubmitButton;
