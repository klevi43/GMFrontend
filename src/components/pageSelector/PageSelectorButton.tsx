interface Props {
  action: () => void;
  text: string;
}
const PageSelectorButton = ({ action, text }: Props) => {
  return (
    <>
      <button
        onClick={action}
        className="hover:text-primary transition-all duration-300 active:text-primary active:scale-95 hover:cursor-pointer"
      >
        {text}
      </button>
    </>
  );
};

export default PageSelectorButton;
