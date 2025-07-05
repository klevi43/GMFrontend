interface Props {
  fontSize: string;
  message?: string;
}

const SuccessMessage = ({ fontSize, message }: Props) => {
  return (
    <>
      <p className={`text-primary text-${fontSize} text-center`}>
        {message ? message : "Success! Please click close to exit."}
      </p>
    </>
  );
};

export default SuccessMessage;
