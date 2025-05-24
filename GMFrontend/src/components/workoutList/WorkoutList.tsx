import React from "react";
interface Props {
  children: React.ReactNode;
}
const WorkoutList = ({ children }: Props) => {
  return (
    <div>
      <ul className="w-[100%] max-w-[1150px] mx-auto">
        {children}
        {/* <li className="w-[100%] pb-2">
          <div className=" border-l-8 border-[#99ff00] text-text  bg-background hover:shadow-lg hover:scale-96 transition-all duration-300 hover:text-primary">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline px-3 py-[1.5rem]">
                <div className="">
                  <span className="font-bold  text-[2rem]">Chest Day</span>
                </div>
                <div className="text-[2rem] px-2"> | </div>
                <div>
                  <div className=" text-end text-[1.2rem]">05/20/2025</div>
                </div>
              </div>
              <div className="pr-[1.5rem] ">
                <button className="text-text text-[3rem] hover:text-white transition duration-300 cursor-pointer">
                  ...
                </button>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default WorkoutList;
