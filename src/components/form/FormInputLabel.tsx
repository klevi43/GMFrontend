interface Props {
  name: string;
}
const FormInputLabel = ({ name }: Props) => {
  return (
    <>
      <label className="block mb-2 font-medium text-white">{name}</label>
    </>
  );
};

export default FormInputLabel;
