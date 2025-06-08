import Title from "../components/form/Title";
import Nav from "../components/navbar/Nav";

const Admin = () => {
  return (
    <>
      <Nav />

      <div className="max-w-[1150px] px-[1rem] mx-auto">
        <div className=" flex justify-between items-baseline">
          <div className="flex items-baseline">
            <Title title="Admin" styles="text-[3rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
