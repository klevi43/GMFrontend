interface Props {
  title: string;
  styles?: string;
}
const Title = ({ title, styles }: Props) => {
  return (
    <>
      <h2
        className={`font-bold text-white ${
          styles
            ? styles
            : "text-center text-[2rem] mb-4 overflow-hidden truncate max-w-[95%]"
        }`}
      >
        {title}
      </h2>
    </>
  );
};

export default Title;
