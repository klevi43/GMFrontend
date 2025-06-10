interface Props {
  fontSize: string;
  message?: string;
}

const SuccessMessage = ({ fontSize, message }: Props) => {
  return (
    <>
      <p className={`text-primary text-${fontSize} text-center`}>
        {message ? message : "Success! Closing in 3 seconds."}
      </p>
    </>
  );
};

export default SuccessMessage;
