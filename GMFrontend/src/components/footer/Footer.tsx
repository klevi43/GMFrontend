import React from "react";
import ScrollFadeIn from "../animations/ScrollFadeIn";
const Footer = () => {
  console.log("Footer rendered");
  return (
    <>
      <ScrollFadeIn>
        <div className="flex justify-center my-[3rem]">
          <h1 className="text-white text-[3rem] font-Jost">Growth</h1>
          <img
            className="h-[4rem] mb-[1rem] pl-[0.5rem]"
            src="/leaf-svgrepo-com.svg"
            alt=""
          />
          <h1 className="text-white text-[3rem] font-Jost  mb-[4rem]">
            Mindset
          </h1>
        </div>
      </ScrollFadeIn>
    </>
  );
};

export default Footer;
