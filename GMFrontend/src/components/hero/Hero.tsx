import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <div className="border-2 border-pink-400 h-auto w-[95%]">
          <h2 className="text-white text-[3rem] font-bold pl-[1rem]">
            Track your progress. <br />
            See results.
          </h2>
          <h3 className="pl-[1rem] mb-[1rem] text-[1.5rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores
          </h3>
          <div className="flex justify-end mb-[1rem]">
            <button className="bg-primary rounded-full text-background mr-[1rem] py-2 px-2 text-[1.8rem] font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-blue-400 h-[20rem] w-[95%]">picture</div>
      </div>
    </>
  );
};

export default Hero;
