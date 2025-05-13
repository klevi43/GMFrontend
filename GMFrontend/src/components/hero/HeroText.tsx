import React from "react";
import { motion } from "motion/react";

import FadeIn from "../animations/FadeIn";
const HeroText = () => {
  return (
    <>
      <div className=" h-auto">
        <FadeIn duration={0.9} delay={0.1} from={75}>
          <h2 className="text-white text-[3rem] font-bold pl-[1rem]">
            Track your progress. <br />
            See results.
          </h2>
        </FadeIn>
        <FadeIn duration={0.9} delay={0.35} from={75}>
          <h3 className="pl-[1rem] mb-[1rem] text-[1.5rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores
          </h3>
        </FadeIn>
        <FadeIn duration={0.9} delay={0.6} from={75}>
          <div className="flex justify-end mb-[1rem] mr-[1rem]">
            <button className="bg-primary rounded-full text-background mr-[1rem] py-2 px-2 text-[1.8rem] font-semibold">
              Get Started
            </button>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default HeroText;
