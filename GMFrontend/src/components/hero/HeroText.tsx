import React from "react";
import { motion } from "motion/react";

import FadeIn from "../animations/FadeIn";
import { Link } from "react-router";
import { REGISTER_ENDPOINT } from "../../constants/constants";
const HeroText = () => {
  return (
    <>
      <div className=" h-auto">
        <FadeIn duration={0.4} delay={0.1} from={75}>
          <h2 className="text-white text-[4rem] font-bold pl-[1rem]">
            Track your progress. <br />
            See results.
          </h2>
        </FadeIn>
        <FadeIn duration={0.4} delay={0.2} from={75}>
          <h3 className="pl-[1rem] mb-[1rem] text-[1.5rem]">
            Making the best version of yourself has never been easier.
          </h3>
        </FadeIn>
        <FadeIn duration={0.4} delay={0.3} from={75}>
          <div className="flex justify-end ">
            <Link
              to={REGISTER_ENDPOINT}
              className="bg-primary rounded-full text-background mr-[1rem] py-2 px-2 text-[1.8rem] font-semibold hover:scale-104 hover:cursor-pointer transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default HeroText;
